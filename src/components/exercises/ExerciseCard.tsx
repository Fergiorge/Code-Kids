import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Exercise, ExerciseResult } from '@types/exercise';
import { useGameState } from '@hooks/useGameState';
import { useSounds } from '@hooks/useSounds';
import DragDropArea from './sequencing/DragDropArea';
import CharacterDisplay from './CharacterDisplay';

interface ExerciseCardProps {
  exercise: Exercise;
  onComplete: (result: ExerciseResult) => void;
  onHint: (hintNumber: number) => void;
}

const ExerciseCard: React.FC<ExerciseCardProps> = ({
  exercise,
  onComplete,
  onHint
}) => {
  const [attempts, setAttempts] = useState(0);
  const [hintsUsed, setHintsUsed] = useState(0);
  const [showHint, setShowHint] = useState<number | null>(null);
  const [startTime] = useState(new Date());
  const [isCorrect, setIsCorrect] = useState(false);
  const [userInput, setUserInput] = useState<string[] | null>(null);
  const [draggedItem, setDraggedItem] = useState<string | null>(null);
  const [droppedItems, setDroppedItems] = useState<string[]>([]);

  const { dispatch } = useGameState();
  const { playSuccess, playError, playClick, playCharacterSound } = useSounds();

  useEffect(() => {
    playCharacterSound(exercise.character === 'Cody' ? 'robot' :
                    exercise.character === 'Luna' ? 'fairy' : 'cat');
  }, [exercise.id, playCharacterSound]);

  const handleHintClick = (hintNumber: number) => {
    playClick();
    if (hintsUsed < hintNumber) {
      setHintsUsed(hintNumber);
      setShowHint(hintNumber);
      onHint(hintNumber);
    }
  };

  const handleDragStart = (item: string) => {
    playClick();
    setDraggedItem(item);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent, position?: number) => {
    e.preventDefault();
    if (!draggedItem) return;

    playClick();

    if (position !== undefined) {
      const newDroppedItems = [...droppedItems];
      newDroppedItems[position] = draggedItem;
      setDroppedItems(newDroppedItems);
    } else {
      setDroppedItems([...droppedItems, draggedItem]);
    }

    setDraggedItem(null);
  };

  const handleCheckAnswer = () => {
    playClick();
    setAttempts(attempts + 1);

    const isCorrect = checkSolution();

    if (isCorrect) {
      setIsCorrect(true);
      playSuccess();

      const result: ExerciseResult = {
        exerciseId: exercise.id,
        completed: true,
        attempts: attempts + 1,
        hintsUsed,
        timeSpent: Math.floor((new Date().getTime() - startTime.getTime()) / 1000),
        completedAt: new Date()
      };

      onComplete(result);
    } else {
      playError();
      // Auto-show hints based on attempts
      if (attempts >= 2 && hintsUsed < 1) {
        handleHintClick(1);
      } else if (attempts >= 4 && hintsUsed < 2) {
        handleHintClick(2);
      } else if (attempts >= 5 && hintsUsed < 3) {
        handleHintClick(3);
      }
    }
  };

  const checkSolution = (): boolean => {
    switch (exercise.interactionType) {
      case 'dragdrop':
        return JSON.stringify(droppedItems) === JSON.stringify(exercise.solution.correctSequence);
      case 'clicktrigger':
        return userInput !== null && userInput.length > 0; // Simplified for now
      case 'repeat':
        return userInput !== null && userInput.length > 0; // Simplified for now
      default:
        return false;
    }
  };

  const resetExercise = () => {
    setDroppedItems([]);
    setUserInput(null);
    setShowHint(null);
    setIsCorrect(false);
  };

  const renderDragDropArea = () => {
    return (
      <DragDropArea
        correctSequence={exercise.solution.correctSequence || []}
        onSequenceChange={(sequence) => {
          // Handle sequence change if needed
        }}
        onCheckAnswer={() => handleCheckAnswer()}
        actionLabels={getActionLabels()}
      />
    );
  };

  const getActionLabels = (): Record<string, string> => {
    return {
      stretch: 'Stretch Arms',
      yawn: 'Yawn',
      stand: 'Stand Up',
      shirt: 'Put on Shirt',
      pants: 'Put on Pants',
      shoes: 'Tie Shoes',
      toothpaste: 'Add Toothpaste',
      brush: 'Brush Teeth',
      rinse: 'Rinse Mouth',
      cereal: 'Pour Cereal',
      milk: 'Pour Milk',
      eat: 'Eat',
      get_water: 'Get Water',
      water_plant: 'Water Plant',
      happy_plant: 'Happy Plant',
      bread1: 'Bread Bottom',
      lettuce: 'Add Lettuce',
      cheese: 'Add Cheese',
      bread2: 'Bread Top',
      wake_up: 'Wake Up',
      dress_up: 'Get Dressed',
      eat_breakfast: 'Eat Breakfast',
      grab_backpack: 'Grab Backpack',
      pick_up_toys: 'Pick Up Toys',
      make_bed: 'Make Bed',
      dust_furniture: 'Dust Furniture',
      vacuum_floor: 'Vacuum Floor',
      block_base: 'Big Block',
      block_middle: 'Medium Block',
      block_top: 'Small Block',
      place_flag: 'Place Flag',
      get_bowl: 'Get Bowl',
      pour_cereal: 'Pour Cereal',
      get_milk: 'Get Milk',
      pour_milk: 'Pour Milk',
      alarm: 'Alarm Rings',
      bathroom: 'Go to Bathroom',
      brush_teeth: 'Brush Teeth',
      mix_dough: 'Mix Dough',
      preheat_oven: 'Preheat Oven',
      shape_cookies: 'Shape Cookies',
      bake: 'Bake Cookies',
      cool_down: 'Cool Down',
      goggles: 'Safety Goggles',
      get_materials: 'Get Materials',
      mix_chemicals: 'Mix Chemicals',
      observe: 'Observe',
      record_results: 'Record Results',
      cleanup: 'Clean Up',
      sketch: 'Sketch Drawing',
      paint_base: 'Paint Base',
      add_details: 'Add Details',
      let_dry: 'Let Dry',
      frame: 'Frame Art',
      display: 'Display Art',
      identify_problem: 'Find Problem',
      get_tools: 'Get Tools',
      remove_wheel: 'Remove Wheel',
      fix_tire: 'Fix Tire',
      put_back: 'Put Wheel Back',
      test_ride: 'Test Ride',
      blueprint: 'Make Blueprint',
      parts: 'Get Robot Parts',
      assemble_body: 'Assemble Body',
      add_arms: 'Add Arms',
      add_legs: 'Add Legs',
      install_brain: 'Install Brain',
      test_power: 'Test Power',
      activate: 'Activate Robot',
      plan_garden: 'Plan Garden',
      prepare_soil: 'Prepare Soil',
      plant_seeds: 'Plant Seeds',
      water_daily: 'Water Daily',
      remove_weeds: 'Remove Weeds',
      add_fertilizer: 'Add Fertilizer',
      watch_grow: 'Watch Grow',
      harvest: 'Harvest Vegetables',
      training: 'Astronaut Training',
      suit_up: 'Suit Up',
      board_rocket: 'Board Rocket',
      countdown: 'Countdown',
      launch: 'Launch',
      orbit_earth: 'Orbit Earth',
      space_walk: 'Spacewalk',
      return_home: 'Return Home',
      compose_song: 'Compose Song',
      practice: 'Practice Song',
      rehearsal: 'Band Rehearsal',
      soundcheck: 'Sound Check',
      costume: 'Wear Costume',
      backstage: 'Wait Backstage',
      perform: 'Perform Concert',
      encore: 'Play Encore',
      register: 'Register',
      travel: 'Travel',
      opening_ceremony: 'Opening Ceremony',
      compete: 'Compete',
      win_medal: 'Win Medal',
      victory_lap: 'Victory Lap',
      celebrate: 'Celebrate Victory',
      jump: 'Jump',
      meow: 'Meow',
      spin: 'Spin Around',
      wave: 'Wave Hello',
      stomp: 'Stomp',
      count: 'Count',
      add_fish: 'Add Fish',
      add_block: 'Add Block',
      plant_flower: 'Plant Flower',
      light_star: 'Light Star',
      red: 'Red Color',
      blue: 'Blue Color',
      do: 'Do Note',
      re: 'Re Note',
      mi: 'Mi Note',
      circle: 'Draw Circle',
      square: 'Draw Square',
      row_3_dots: 'Row of 3 Dots',
      add_stair_step: 'Add Stair Step',
      flower_row_with_petals: 'Flower with Petals',
      expanding_circle: 'Expand Circle',
      color_arc: 'Color Arc',
      open_umbrella: 'Open Umbrella',
      eat_food: 'Eat Food',
      go_to_sleep: 'Go to Sleep',
      bloom: 'Bloom Flowers',
      cast_spell: 'Cast Spell',
      go_outside: 'Play Outside',
      stay_inside: 'Stay Inside',
      drink_cold: 'Drink Cold',
      drink_hot: 'Drink Hot',
      bird_active: 'Bird Active',
      owl_active: 'Owl Active',
      knock: 'Knock Door',
      walk_in: 'Walk In',
      wait: 'Wait',
      cross: 'Cross Bridge',
      grow_flower: 'Grow Flowers',
      start_party: 'Start Party',
      tell_story: 'Tell Stories',
      create_rainbow: 'Create Rainbow',
      find_treasure: 'Find Treasure',
      wear_tshirt: 'Wear T-Shirt',
      wear_jacket: 'Wear Jacket',
      wear_raincoat: 'Wear Raincoat',
      pet_shade: 'Pet in Shade',
      wild_play: 'Wild Animal Play',
      all_shelter: 'All in Shelter',
      walk: 'Walk',
      bike: 'Ride Bike',
      car: 'Drive Car',
      protect_spell: 'Protection Spell',
      freeze_spell: 'Freeze Spell',
      wind_spell: 'Wind Spell',
      open_treasure: 'Open Treasure',
      search_light: 'Search with Light',
      fight_magic: 'Fight with Magic',
      win_quest: 'Win Quest'
    };
  };

  const renderClickTrigger = () => {
    return (
      <div className="space-y-6">
        <div className="text-center">
          <p className="text-lg font-sans mb-4">
            Click the right objects to trigger the magic!
          </p>
          {/* Placeholder for click trigger interaction */}
          <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
            {exercise.solution.conditions?.map((condition, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  playClick();
                  setUserInput([condition.action]);
                }}
                className="p-8 bg-secondary rounded-xl shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="text-3xl mb-2">
                  {getConditionEmoji(condition.condition)}
                </div>
                <div className="text-sm font-sans">
                  {getActionLabel(condition.action)}
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const renderRepeat = () => {
    const [repetitions, setRepetitions] = useState(1);

    return (
      <div className="space-y-6">
        <div className="text-center">
          <label className="block text-lg font-sans mb-4">
            How many times should {exercise.character} repeat?
          </label>
          <div className="flex items-center justify-center space-x-4 mb-6">
            <input
              type="range"
              min={exercise.solution.repetitions?.min || 1}
              max={exercise.solution.repetitions?.max || 10}
              value={repetitions}
              onChange={(e) => {
                playClick();
                setRepetitions(parseInt(e.target.value));
              }}
              className="w-48 h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <span className="text-2xl font-bold font-child">
              {repetitions}
            </span>
          </div>

          <motion.button
            onClick={() => {
              playClick();
              setUserInput([`repeat_${repetitions}`]);
            }}
            className="btn-accent"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Looping! 🔄
          </motion.button>
        </div>
      </div>
    );
  };

  const getActionLabel = (action: string): string => {
    const labels: Record<string, string> = {
      stretch: 'Stretch Arms',
      yawn: 'Yawn',
      stand: 'Stand Up',
      shirt: 'Put on Shirt',
      pants: 'Put on Pants',
      shoes: 'Tie Shoes',
      toothpaste: 'Add Toothpaste',
      brush: 'Brush Teeth',
      rinse: 'Rinse Mouth',
      cereal: 'Pour Cereal',
      milk: 'Pour Milk',
      eat: 'Eat',
      get_water: 'Get Water',
      water_plant: 'Water Plant',
      happy_plant: 'Happy Plant',
      bread1: 'Bread Bottom',
      lettuce: 'Add Lettuce',
      cheese: 'Add Cheese',
      bread2: 'Bread Top',
      wake_up: 'Wake Up',
      dress_up: 'Get Dressed',
      eat_breakfast: 'Eat Breakfast',
      grab_backpack: 'Grab Backpack',
      pick_up_toys: 'Pick Up Toys',
      make_bed: 'Make Bed',
      dust_furniture: 'Dust Furniture',
      vacuum_floor: 'Vacuum Floor',
      block_base: 'Big Block',
      block_middle: 'Medium Block',
      block_top: 'Small Block',
      place_flag: 'Place Flag',
      get_bowl: 'Get Bowl',
      pour_cereal: 'Pour Cereal',
      get_milk: 'Get Milk',
      pour_milk: 'Pour Milk',
      alarm: 'Alarm Rings',
      bathroom: 'Go to Bathroom',
      brush_teeth: 'Brush Teeth',
      mix_dough: 'Mix Dough',
      preheat_oven: 'Preheat Oven',
      shape_cookies: 'Shape Cookies',
      bake: 'Bake Cookies',
      cool_down: 'Cool Down',
      goggles: 'Safety Goggles',
      get_materials: 'Get Materials',
      mix_chemicals: 'Mix Chemicals',
      observe: 'Observe',
      record_results: 'Record Results',
      cleanup: 'Clean Up',
      sketch: 'Sketch Drawing',
      paint_base: 'Paint Base',
      add_details: 'Add Details',
      let_dry: 'Let Dry',
      frame: 'Frame Art',
      display: 'Display Art',
      identify_problem: 'Find Problem',
      get_tools: 'Get Tools',
      remove_wheel: 'Remove Wheel',
      fix_tire: 'Fix Tire',
      put_back: 'Put Wheel Back',
      test_ride: 'Test Ride',
      blueprint: 'Make Blueprint',
      parts: 'Get Robot Parts',
      assemble_body: 'Assemble Body',
      add_arms: 'Add Arms',
      add_legs: 'Add Legs',
      install_brain: 'Install Brain',
      test_power: 'Test Power',
      activate: 'Activate Robot',
      plan_garden: 'Plan Garden',
      prepare_soil: 'Prepare Soil',
      plant_seeds: 'Plant Seeds',
      water_daily: 'Water Daily',
      remove_weeds: 'Remove Weeds',
      add_fertilizer: 'Add Fertilizer',
      watch_grow: 'Watch Grow',
      harvest: 'Harvest Vegetables',
      training: 'Astronaut Training',
      suit_up: 'Suit Up',
      board_rocket: 'Board Rocket',
      countdown: 'Countdown',
      launch: 'Launch',
      orbit_earth: 'Orbit Earth',
      space_walk: 'Spacewalk',
      return_home: 'Return Home',
      compose_song: 'Compose Song',
      practice: 'Practice Song',
      rehearsal: 'Band Rehearsal',
      soundcheck: 'Sound Check',
      costume: 'Wear Costume',
      backstage: 'Wait Backstage',
      perform: 'Perform Concert',
      encore: 'Play Encore',
      register: 'Register',
      travel: 'Travel',
      opening_ceremony: 'Opening Ceremony',
      compete: 'Compete',
      win_medal: 'Win Medal',
      victory_lap: 'Victory Lap',
      celebrate: 'Celebrate Victory',
      jump: 'Jump',
      meow: 'Meow',
      spin: 'Spin Around',
      wave: 'Wave Hello',
      stomp: 'Stomp',
      count: 'Count',
      add_fish: 'Add Fish',
      add_block: 'Add Block',
      plant_flower: 'Plant Flower',
      light_star: 'Light Star',
      red: 'Red Color',
      blue: 'Blue Color',
      do: 'Do Note',
      re: 'Re Note',
      mi: 'Mi Note',
      circle: 'Draw Circle',
      square: 'Draw Square',
      row_3_dots: 'Row of 3 Dots',
      add_stair_step: 'Add Stair Step',
      flower_row_with_petals: 'Flower with Petals',
      expanding_circle: 'Expand Circle',
      color_arc: 'Color Arc',
      open_umbrella: 'Open Umbrella',
      eat_food: 'Eat Food',
      go_to_sleep: 'Go to Sleep',
      bloom: 'Bloom Flowers',
      cast_spell: 'Cast Spell',
      go_outside: 'Play Outside',
      stay_inside: 'Stay Inside',
      drink_cold: 'Drink Cold',
      drink_hot: 'Drink Hot',
      bird_active: 'Bird Active',
      owl_active: 'Owl Active',
      knock: 'Knock Door',
      walk_in: 'Walk In',
      wait: 'Wait',
      cross: 'Cross Bridge',
      grow_flower: 'Grow Flowers',
      start_party: 'Start Party',
      tell_story: 'Tell Stories',
      create_rainbow: 'Create Rainbow',
      find_treasure: 'Find Treasure',
      wear_tshirt: 'Wear T-Shirt',
      wear_jacket: 'Wear Jacket',
      wear_raincoat: 'Wear Raincoat',
      pet_shade: 'Pet in Shade',
      wild_play: 'Wild Animal Play',
      all_shelter: 'All in Shelter',
      walk: 'Walk',
      bike: 'Ride Bike',
      car: 'Drive Car',
      protect_spell: 'Protection Spell',
      freeze_spell: 'Freeze Spell',
      wind_spell: 'Wind Spell',
      open_treasure: 'Open Treasure',
      search_light: 'Search with Light',
      fight_magic: 'Fight with Magic',
      win_quest: 'Win Quest'
    };

    return labels[action] || action;
  };

  const getConditionEmoji = (condition: string): string => {
    const emojis: Record<string, string> = {
      is_raining: '🌧️',
      sees_food: '👀',
      is_night: '🌙',
      has_sunlight: '☀️',
      wand_active: '✨',
      is_sunny: '☀️',
      not_sunny: '☁️',
      is_hot: '🔥',
      not_hot: '❄️',
      is_daytime: '🌞',
      not_daytime: '🌜',
      is_closed: '🚪',
      not_closed: '🚪',
      is_raised: '⬆️',
      not_raised: '⬇️',
      sun_and_water_present: '🌈',
      party_ready: '🎉',
      storytime_ready: '🏕',
      rainbow_ready: '🌈',
      treasure_hunt_ready: '🗺️',
      sunny_and_warm: '🌞',
      sunny_and_cold: '🥶',
      rainy: '🌧️',
      pet_and_sunny: '🐕☀️',
      wild_and_sunny: '🦁☀️',
      short_and_clear: '🚶',
      long_and_clear: '🚴',
      friend_and_fire: '👫🔥',
      enemy_and_water: '👹💧',
      enemy_and_earth: '👹🏔️',
      forest_day_and_key: '🌲🌞🗝️',
      forest_night_and_nokey: '🌲🌜',
      cave_and_monster: '🕳️👹',
      castle_day_and_star: '🏰🌟⭐'
    };

    return emojis[condition] || '❓';
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl shadow-xl p-8"
      >
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800 font-child mb-2">
            {exercise.title}
          </h2>
          <p className="text-lg text-gray-600 font-sans mb-4">
            {exercise.instructions}
          </p>

          {/* Character and theme info */}
          <div className="flex justify-center items-center space-x-4 mb-6">
            <div className="text-6xl">
              {exercise.visualTheme === 'robot' ? '🤖' :
               exercise.visualTheme === 'magic' ? '🧚' : '🐱'}
            </div>
            <div>
              <div className="text-lg font-bold text-gray-700 font-child">
                {exercise.character}
              </div>
              <div className="text-sm text-gray-500 font-sans">
                Exercise {exercise.level}
              </div>
            </div>
          </div>
        </div>

        {/* Main Exercise Area */}
        <div className="mb-6">
          {exercise.interactionType === 'dragdrop' && renderDragDropArea()}
          {exercise.interactionType === 'clicktrigger' && renderClickTrigger()}
          {exercise.interactionType === 'repeat' && renderRepeat()}
        </div>

        {/* Hints Section */}
        <AnimatePresence>
          {showHint !== null && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4 mb-6"
            >
              <div className="flex items-start space-x-3">
                <div className="text-2xl">💡</div>
                <div>
                  <div className="font-bold text-blue-800 font-sans mb-1">
                    Hint {showHint}:
                  </div>
                  <div className="text-blue-700 font-sans">
                    {exercise.hints[showHint - 1]}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Action Buttons */}
        <div className="flex justify-center space-x-4">
          {!isCorrect && (
            <>
              <motion.button
                onClick={handleCheckAnswer}
                className="btn-accent"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Check Answer ✓
              </motion.button>

              <motion.button
                onClick={resetExercise}
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Reset ↻
              </motion.button>

              <motion.button
                onClick={() => handleHintClick(hintsUsed + 1)}
                disabled={hintsUsed >= exercise.hints.length}
                className="btn-secondary disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                💡 Hint ({hintsUsed}/{exercise.hints.length})
              </motion.button>
            </>
          )}

          {isCorrect && (
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              className="text-6xl"
            >
              🎉
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default ExerciseCard;