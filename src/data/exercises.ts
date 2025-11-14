import { Exercise } from '@types/exercise';

export const exercises: Exercise[] = [
  // === SEQUENCING EXERCISES (1-20) ===

  // Exercises 1-5: Simple sequences (2-3 steps)
  {
    id: 'seq_1',
    category: 'sequencing',
    level: 1,
    title: 'Robot Wake Up',
    instructions: 'Help Cody the robot wake up! Arrange the actions in the right order.',
    visualTheme: 'robot',
    interactionType: 'dragdrop',
    solution: {
      type: 'dragdrop',
      correctSequence: ['stretch', 'yawn', 'stand']
    },
    hints: [
      'First, robots need to stretch their arms',
      'What do you do when you first wake up? Yawn!',
      'After stretching and yawning, robots stand up from bed'
    ],
    successAnimation: 'bounce',
    character: 'Cody',
    difficulty: 'easy'
  },
  {
    id: 'seq_2',
    category: 'sequencing',
    level: 2,
    title: 'Get Dressed',
    instructions: 'Help Cody get dressed for the day!',
    visualTheme: 'robot',
    interactionType: 'dragdrop',
    solution: {
      type: 'dragdrop',
      correctSequence: ['shirt', 'pants', 'shoes']
    },
    hints: [
      'You put on a shirt first',
      'Next, put on your pants',
      'Finally, put on your shoes to go outside'
    ],
    successAnimation: 'dance',
    character: 'Cody',
    difficulty: 'easy'
  },
  {
    id: 'seq_3',
    category: 'sequencing',
    level: 3,
    title: 'Brush Teeth',
    instructions: 'Help Cody brush his teeth properly!',
    visualTheme: 'robot',
    interactionType: 'dragdrop',
    solution: {
      type: 'dragdrop',
      correctSequence: ['toothpaste', 'brush', 'rinse']
    },
    hints: [
      'First, put toothpaste on the brush',
      'Then brush your teeth',
      'Finally, rinse your mouth with water'
    ],
    successAnimation: 'sparkle',
    character: 'Cody',
    difficulty: 'easy'
  },
  {
    id: 'seq_4',
    category: 'sequencing',
    level: 4,
    title: 'Eat Breakfast',
    instructions: 'Help Cody make and eat breakfast!',
    visualTheme: 'robot',
    interactionType: 'dragdrop',
    solution: {
      type: 'dragdrop',
      correctSequence: ['cereal', 'milk', 'eat']
    },
    hints: [
      'First, pour cereal into the bowl',
      'Next, add milk to the cereal',
      'Finally, eat your delicious breakfast'
    ],
    successAnimation: 'celebration',
    character: 'Cody',
    difficulty: 'easy'
  },
  {
    id: 'seq_5',
    category: 'sequencing',
    level: 5,
    title: 'Water Plant',
    instructions: 'Help Cody water his favorite plant!',
    visualTheme: 'robot',
    interactionType: 'dragdrop',
    solution: {
      type: 'dragdrop',
      correctSequence: ['get_water', 'water_plant', 'happy_plant']
    },
    hints: [
      'First, get water in the watering can',
      'Then water the plant',
      'The plant becomes happy and grows!'
    ],
    successAnimation: 'sparkle',
    character: 'Cody',
    difficulty: 'easy'
  },

  // Exercises 6-10: Medium sequences (4-5 steps)
  {
    id: 'seq_6',
    category: 'sequencing',
    level: 6,
    title: 'Make Sandwich',
    instructions: 'Help Cody make a delicious sandwich!',
    visualTheme: 'robot',
    interactionType: 'dragdrop',
    solution: {
      type: 'dragdrop',
      correctSequence: ['bread1', 'lettuce', 'cheese', 'bread2']
    },
    hints: [
      'Start with the first slice of bread',
      'Add lettuce on top of the bread',
      'Place cheese on the lettuce',
      'Finish with the top slice of bread'
    ],
    successAnimation: 'celebration',
    character: 'Cody',
    difficulty: 'medium'
  },
  {
    id: 'seq_7',
    category: 'sequencing',
    level: 7,
    title: 'Get Ready for School',
    instructions: 'Help Cody get ready for school!',
    visualTheme: 'robot',
    interactionType: 'dragdrop',
    solution: {
      type: 'dragdrop',
      correctSequence: ['wake_up', 'dress_up', 'eat_breakfast', 'grab_backpack']
    },
    hints: [
      'First, Cody needs to wake up',
      'Then he needs to get dressed',
      'Next, he should eat breakfast',
      'Finally, grab his backpack and go to school!'
    ],
    successAnimation: 'bounce',
    character: 'Cody',
    difficulty: 'medium'
  },
  {
    id: 'seq_8',
    category: 'sequencing',
    level: 8,
    title: 'Clean Room',
    instructions: 'Help Cody clean his messy room!',
    visualTheme: 'robot',
    interactionType: 'dragdrop',
    solution: {
      type: 'dragdrop',
      correctSequence: ['pick_up_toys', 'make_bed', 'dust_furniture', 'vacuum_floor']
    },
    hints: [
      'Start by picking up all the toys',
      'Then make the bed nice and neat',
      'Next, dust the furniture',
      'Finally, vacuum the floor'
    ],
    successAnimation: 'sparkle',
    character: 'Cody',
    difficulty: 'medium'
  },
  {
    id: 'seq_9',
    category: 'sequencing',
    level: 9,
    title: 'Build Tower',
    instructions: 'Help Cody build a tall tower with blocks!',
    visualTheme: 'robot',
    interactionType: 'dragdrop',
    solution: {
      type: 'dragdrop',
      correctSequence: ['block_base', 'block_middle', 'block_top', 'place_flag']
    },
    hints: [
      'Start with the biggest block at the bottom',
      'Add the middle-sized block',
      'Place the smallest block on top',
      'Finally, put a flag on the very top!'
    ],
    successAnimation: 'celebration',
    character: 'Cody',
    difficulty: 'medium'
  },
  {
    id: 'seq_10',
    category: 'sequencing',
    level: 10,
    title: 'Robot Make Breakfast',
    instructions: 'Help Cody make a complete breakfast!',
    visualTheme: 'robot',
    interactionType: 'dragdrop',
    solution: {
      type: 'dragdrop',
      correctSequence: ['get_bowl', 'pour_cereal', 'get_milk', 'pour_milk', 'eat_breakfast']
    },
    hints: [
      'First, get a bowl from the cabinet',
      'Pour cereal into the bowl',
      'Get milk from the refrigerator',
      'Pour milk over the cereal',
      'Finally, sit down and enjoy breakfast!'
    ],
    successAnimation: 'dance',
    character: 'Cody',
    difficulty: 'medium'
  },

  // Exercises 11-15: Complex sequences (6-7 steps)
  {
    id: 'seq_11',
    category: 'sequencing',
    level: 11,
    title: 'Morning Routine',
    instructions: 'Help Cody complete his full morning routine!',
    visualTheme: 'robot',
    interactionType: 'dragdrop',
    solution: {
      type: 'dragdrop',
      correctSequence: ['alarm', 'stretch', 'bathroom', 'dress', 'breakfast', 'brush_teeth']
    },
    hints: [
      'The alarm clock rings first',
      'Cody stretches when he wakes up',
      'Then he goes to the bathroom',
      'Next, he gets dressed',
      'After that, he eats breakfast',
      'Finally, he brushes his teeth'
    ],
    successAnimation: 'bounce',
    character: 'Cody',
    difficulty: 'hard'
  },
  {
    id: 'seq_12',
    category: 'sequencing',
    level: 12,
    title: 'Bake Cookies',
    instructions: 'Help Cody bake delicious cookies step by step!',
    visualTheme: 'robot',
    interactionType: 'dragdrop',
    solution: {
      type: 'dragdrop',
      correctSequence: ['mix_dough', 'preheat_oven', 'shape_cookies', 'bake', 'cool_down', 'eat']
    },
    hints: [
      'First, mix the cookie dough',
      'Preheat the oven while mixing',
      'Shape the cookies on the baking sheet',
      'Bake the cookies in the oven',
      'Let them cool down',
      'Finally, eat the yummy cookies!'
    ],
    successAnimation: 'celebration',
    character: 'Cody',
    difficulty: 'hard'
  },
  {
    id: 'seq_13',
    category: 'sequencing',
    level: 13,
    title: 'Science Experiment',
    instructions: 'Help Cody conduct a cool science experiment!',
    visualTheme: 'robot',
    interactionType: 'dragdrop',
    solution: {
      type: 'dragdrop',
      correctSequence: ['goggles', 'get_materials', 'mix_chemicals', 'observe', 'record_results', 'cleanup']
    },
    hints: [
      'Safety first! Put on safety goggles',
      'Gather all experiment materials',
      'Carefully mix the chemicals',
      'Observe what happens',
      'Record your observations',
      'Clean up the experiment area'
    ],
    successAnimation: 'sparkle',
    character: 'Cody',
    difficulty: 'hard'
  },
  {
    id: 'seq_14',
    category: 'sequencing',
    level: 14,
    title: 'Art Project',
    instructions: 'Help Cody create an amazing art project!',
    visualTheme: 'robot',
    interactionType: 'dragdrop',
    solution: {
      type: 'dragdrop',
      correctSequence: ['sketch', 'paint_base', 'add_details', 'let_dry', 'frame', 'display']
    },
    hints: [
      'First, sketch the basic drawing',
      'Paint the base colors',
      'Add fine details and highlights',
      'Let the painting dry completely',
      'Frame the artwork',
      'Display it for everyone to see!'
    ],
    successAnimation: 'dance',
    character: 'Cody',
    difficulty: 'hard'
  },
  {
    id: 'seq_15',
    category: 'sequencing',
    level: 15,
    title: 'Fix Bicycle',
    instructions: 'Help Cody fix his broken bicycle!',
    visualTheme: 'robot',
    interactionType: 'dragdrop',
    solution: {
      type: 'dragdrop',
      correctSequence: ['identify_problem', 'get_tools', 'remove_wheel', 'fix_tire', 'put_back', 'test_ride']
    },
    hints: [
      'First, identify what\'s wrong with the bike',
      'Get the right tools for the job',
      'Remove the wheel that needs fixing',
      'Fix the flat tire',
      'Put the wheel back on',
      'Take it for a test ride!'
    ],
    successAnimation: 'bounce',
    character: 'Cody',
    difficulty: 'hard'
  },

  // Exercises 16-20: Very complex sequences (8-10 steps)
  {
    id: 'seq_16',
    category: 'sequencing',
    level: 16,
    title: 'Build Robot Friend',
    instructions: 'Help Cody build a new robot friend from scratch!',
    visualTheme: 'robot',
    interactionType: 'dragdrop',
    solution: {
      type: 'dragdrop',
      correctSequence: ['blueprint', 'parts', 'assemble_body', 'add_arms', 'add_legs', 'install_brain', 'test_power', 'activate']
    },
    hints: [
      'Start with the building blueprint',
      'Gather all the robot parts',
      'Assemble the main body',
      'Attach the arms',
      'Add the legs',
      'Install the AI brain',
      'Test the power systems',
      'Activate the new robot friend!'
    ],
    successAnimation: 'celebration',
    character: 'Cody',
    difficulty: 'hard'
  },
  {
    id: 'seq_17',
    category: 'sequencing',
    level: 17,
    title: 'Garden Adventure',
    instructions: 'Help Cody start and maintain a beautiful garden!',
    visualTheme: 'robot',
    interactionType: 'dragdrop',
    solution: {
      type: 'dragdrop',
      correctSequence: ['plan_garden', 'prepare_soil', 'plant_seeds', 'water_daily', 'remove_weeds', 'add_fertilizer', 'watch_grow', 'harvest']
    },
    hints: [
      'First, plan your garden layout',
      'Prepare the soil for planting',
      'Plant the seeds in rows',
      'Water the plants every day',
      'Remove any weeds that grow',
      'Add fertilizer to help growth',
      'Watch your garden grow tall',
      'Harvest the vegetables when ready!'
    ],
    successAnimation: 'sparkle',
    character: 'Cody',
    difficulty: 'hard'
  },
  {
    id: 'seq_18',
    category: 'sequencing',
    level: 18,
    title: 'Space Mission',
    instructions: 'Help Cody prepare for and complete a space mission!',
    visualTheme: 'robot',
    interactionType: 'dragdrop',
    solution: {
      type: 'dragdrop',
      correctSequence: ['training', 'suit_up', 'board_rocket', 'countdown', 'launch', 'orbit_earth', 'space_walk', 'return_home']
    },
    hints: [
      'Complete astronaut training',
      'Put on the spacesuit',
      'Board the rocket',
      'Countdown to launch',
      'Launch into space',
      'Orbit the Earth',
      'Go for a spacewalk',
      'Return home safely!'
    ],
    successAnimation: 'dance',
    character: 'Cody',
    difficulty: 'hard'
  },
  {
    id: 'seq_19',
    category: 'sequencing',
    level: 19,
    title: 'Music Concert',
    instructions: 'Help Cody prepare and perform in a music concert!',
    visualTheme: 'robot',
    interactionType: 'dragdrop',
    solution: {
      type: 'dragdrop',
      correctSequence: ['compose_song', 'practice', 'rehearsal', 'soundcheck', 'costume', 'backstage', 'perform', 'encore']
    },
    hints: [
      'Compose a new song',
      'Practice the song many times',
      'Band rehearsal with everyone',
      'Sound check before the show',
      'Put on the concert costume',
      'Wait backstage for your turn',
      'Perform the concert',
      'Play an encore if the crowd loves it!'
    ],
    successAnimation: 'celebration',
    character: 'Cody',
    difficulty: 'hard'
  },
  {
    id: 'seq_20',
    category: 'sequencing',
    level: 20,
    title: 'Robot Olympics',
    instructions: 'Help Cody compete in the Robot Olympics!',
    visualTheme: 'robot',
    interactionType: 'dragdrop',
    solution: {
      type: 'dragdrop',
      correctSequence: ['register', 'training', 'travel', 'opening_ceremony', 'compete', 'win_medal', 'victory_lap', 'celebrate']
    },
    hints: [
      'Register for the Robot Olympics',
      'Train hard for the competition',
      'Travel to the Olympic city',
      'Participate in opening ceremony',
      'Compete in robot events',
      'Win a gold medal',
      'Take a victory lap',
      'Celebrate with everyone!'
    ],
    successAnimation: 'bounce',
    character: 'Cody',
    difficulty: 'hard'
  },

  // === EVENTS AND CONDITIONS EXERCISES (21-40) ===

  // Exercises 21-25: Simple IF statements
  {
    id: 'event_21',
    category: 'events',
    level: 21,
    title: 'If It Rains',
    instructions: 'Help Luna the fairy use her umbrella when it rains!',
    visualTheme: 'magic',
    interactionType: 'clicktrigger',
    solution: {
      type: 'clicktrigger',
      conditions: [
        { trigger: 'rain_click', condition: 'is_raining', action: 'open_umbrella' }
      ]
    },
    hints: [
      'Click the cloud to make it rain',
      'IF it rains, THEN Luna opens her umbrella',
      'Luna only opens umbrella when it\'s raining'
    ],
    successAnimation: 'sparkle',
    character: 'Luna',
    difficulty: 'easy'
  },
  {
    id: 'event_22',
    category: 'events',
    level: 22,
    title: 'Hungry Dragon',
    instructions: 'Help the dragon eat when he sees food!',
    visualTheme: 'magic',
    interactionType: 'clicktrigger',
    solution: {
      type: 'clicktrigger',
      conditions: [
        { trigger: 'food_appears', condition: 'sees_food', action: 'eat_food' }
      ]
    },
    hints: [
      'Click to show food to the dragon',
      'IF the dragon sees food, THEN he eats it',
      'The dragon only eats when food is visible'
    ],
    successAnimation: 'dance',
    character: 'Draco',
    difficulty: 'easy'
  },
  {
    id: 'event_23',
    category: 'events',
    level: 23,
    title: 'Sleepy Cat',
    instructions: 'Help the cat take a nap when it\'s nighttime!',
    visualTheme: 'magic',
    interactionType: 'clicktrigger',
    solution: {
      type: 'clicktrigger',
      conditions: [
        { trigger: 'moon_appears', condition: 'is_night', action: 'go_to_sleep' }
      ]
    },
    hints: [
      'Click to change to nighttime',
      'IF it\'s nighttime, THEN the cat goes to sleep',
      'Cats sleep when it\'s dark outside'
    ],
    successAnimation: 'bounce',
    character: 'Mittens',
    difficulty: 'easy'
  },
  {
    id: 'event_24',
    category: 'events',
    level: 24,
    title: 'Flower Bloom',
    instructions: 'Help flowers bloom when they get sunlight!',
    visualTheme: 'magic',
    interactionType: 'clicktrigger',
    solution: {
      type: 'clicktrigger',
      conditions: [
        { trigger: 'sun_appears', condition: 'has_sunlight', action: 'bloom' }
      ]
    },
    hints: [
      'Click to make the sun appear',
      'IF flowers have sunlight, THEN they bloom',
      'Flowers need sunlight to open up'
    ],
    successAnimation: 'sparkle',
    character: 'Luna',
    difficulty: 'easy'
  },
  {
    id: 'event_25',
    category: 'events',
    level: 25,
    title: 'Magic Wand',
    instructions: 'Help Luna cast spells with her magic wand!',
    visualTheme: 'magic',
    interactionType: 'clicktrigger',
    solution: {
      type: 'clicktrigger',
      conditions: [
        { trigger: 'wave_wand', condition: 'wand_active', action: 'cast_spell' }
      ]
    },
    hints: [
      'Click Luna to wave her wand',
      'IF the wand is active, THEN she casts a spell',
      'The magic only works when the wand is ready'
    ],
    successAnimation: 'celebration',
    character: 'Luna',
    difficulty: 'easy'
  },

  // Exercises 26-30: IF-ELSE statements
  {
    id: 'event_26',
    category: 'events',
    level: 26,
    title: 'Sunny or Rainy',
    instructions: 'Help the character choose the right activity for the weather!',
    visualTheme: 'magic',
    interactionType: 'clicktrigger',
    solution: {
      type: 'clicktrigger',
      conditions: [
        { trigger: 'weather_sunny', condition: 'is_sunny', action: 'go_outside' },
        { trigger: 'weather_rainy', condition: 'not_sunny', action: 'stay_inside' }
      ]
    },
    hints: [
      'Click to change weather',
      'IF sunny THEN play outside, ELSE stay inside',
      'Choose activities based on weather'
    ],
    successAnimation: 'bounce',
    character: 'Luna',
    difficulty: 'medium'
  },
  {
    id: 'event_27',
    category: 'events',
    level: 27,
    title: 'Hot or Cold Drink',
    instructions: 'Help the character choose the right drink!',
    visualTheme: 'magic',
    interactionType: 'clicktrigger',
    solution: {
      type: 'clicktrigger',
      conditions: [
        { trigger: 'temperature_hot', condition: 'is_hot', action: 'drink_cold' },
        { trigger: 'temperature_cold', condition: 'not_hot', action: 'drink_hot' }
      ]
    },
    hints: [
      'Click to change temperature',
      'IF hot THEN drink cold, ELSE drink hot',
      'Choose drinks based on temperature'
    ],
    successAnimation: 'sparkle',
    character: 'Luna',
    difficulty: 'medium'
  },
  {
    id: 'event_28',
    category: 'events',
    level: 28,
    title: 'Day or Night Animal',
    instructions: 'Help animals be active at the right time!',
    visualTheme: 'magic',
    interactionType: 'clicktrigger',
    solution: {
      type: 'clicktrigger',
      conditions: [
        { trigger: 'time_day', condition: 'is_daytime', action: 'bird_active' },
        { trigger: 'time_night', condition: 'not_daytime', action: 'owl_active' }
      ]
    },
    hints: [
      'Click to change time of day',
      'IF day THEN bird is active, ELSE owl is active',
      'Different animals are active at different times'
    ],
    successAnimation: 'dance',
    character: 'Luna',
    difficulty: 'medium'
  },
  {
    id: 'event_29',
    category: 'events',
    level: 29,
    title: 'Door Open or Closed',
    instructions: 'Help the character decide whether to knock or enter!',
    visualTheme: 'magic',
    interactionType: 'clicktrigger',
    solution: {
      type: 'clicktrigger',
      conditions: [
        { trigger: 'door_closed', condition: 'is_closed', action: 'knock' },
        { trigger: 'door_open', condition: 'not_closed', action: 'walk_in' }
      ]
    },
    hints: [
      'Click to open or close the door',
      'IF closed THEN knock, ELSE walk in',
      'Decide what to do based on door state'
    ],
    successAnimation: 'bounce',
    character: 'Luna',
    difficulty: 'medium'
  },
  {
    id: 'event_30',
    category: 'events',
    level: 30,
    title: 'Bridge Up or Down',
    instructions: 'Help the character cross the river safely!',
    visualTheme: 'magic',
    interactionType: 'clicktrigger',
    solution: {
      type: 'clicktrigger',
      conditions: [
        { trigger: 'bridge_up', condition: 'is_raised', action: 'wait' },
        { trigger: 'bridge_down', condition: 'not_raised', action: 'cross' }
      ]
    },
    hints: [
      'Click to raise or lower the bridge',
      'IF raised THEN wait, ELSE cross',
      'Safety first with bridge operations'
    ],
    successAnimation: 'celebration',
    character: 'Luna',
    difficulty: 'medium'
  },

  // Exercises 31-35: Multiple conditions (AND/OR)
  {
    id: 'event_31',
    category: 'events',
    level: 31,
    title: 'Magic Garden',
    instructions: 'Help flowers grow with both sun AND water!',
    visualTheme: 'magic',
    interactionType: 'clicktrigger',
    solution: {
      type: 'clicktrigger',
      conditions: [
        { trigger: 'sun_and_water', condition: 'sun_and_water_present', action: 'grow_flower' }
      ]
    },
    hints: [
      'Click to add sun and water',
      'IF sun AND water THEN flowers grow',
      'Flowers need both conditions to grow'
    ],
    successAnimation: 'sparkle',
    character: 'Luna',
    difficulty: 'hard'
  },
  {
    id: 'event_32',
    category: 'events',
    level: 32,
    title: 'Party Time',
    instructions: 'Start the party when friends AND music are ready!',
    visualTheme: 'magic',
    interactionType: 'clicktrigger',
    solution: {
      type: 'clicktrigger',
      conditions: [
        { trigger: 'friends_and_music', condition: 'party_ready', action: 'start_party' }
      ]
    },
    hints: [
      'Click to add friends and music',
      'IF friends AND music THEN start party',
      'Both conditions needed for fun!'
    ],
    successAnimation: 'dance',
    character: 'Luna',
    difficulty: 'hard'
  },
  {
    id: 'event_33',
    category: 'events',
    level: 33,
    title: 'Campfire Story',
    instructions: 'Tell stories around the campfire when it\'s dark AND cozy!',
    visualTheme: 'magic',
    interactionType: 'clicktrigger',
    solution: {
      type: 'clicktrigger',
      conditions: [
        { trigger: 'dark_and_fire', condition: 'storytime_ready', action: 'tell_story' }
      ]
    },
    hints: [
      'Click to make it dark and start fire',
      'IF dark AND fire THEN tell stories',
      'Perfect conditions for campfire stories'
    ],
    successAnimation: 'sparkle',
    character: 'Luna',
    difficulty: 'hard'
  },
  {
    id: 'event_34',
    category: 'events',
    level: 34,
    title: 'Rainbow Magic',
    instructions: 'Create a rainbow when rain AND sunlight appear together!',
    visualTheme: 'magic',
    interactionType: 'clicktrigger',
    solution: {
      type: 'clicktrigger',
      conditions: [
        { trigger: 'rain_and_sun', condition: 'rainbow_ready', action: 'create_rainbow' }
      ]
    },
    hints: [
      'Click to add rain and sun together',
      'IF rain AND sun THEN rainbow appears',
      'Rainbows need both rain and sunshine'
    ],
    successAnimation: 'celebration',
    character: 'Luna',
    difficulty: 'hard'
  },
  {
    id: 'event_35',
    category: 'events',
    level: 35,
    title: 'Treasure Hunt',
    instructions: 'Find treasure when you have a map AND a key!',
    visualTheme: 'magic',
    interactionType: 'clicktrigger',
    solution: {
      type: 'clicktrigger',
      conditions: [
        { trigger: 'map_and_key', condition: 'treasure_hunt_ready', action: 'find_treasure' }
      ]
    },
    hints: [
      'Click to get map and key',
      'IF map AND key THEN find treasure',
      'Both items needed for treasure hunting'
    ],
    successAnimation: 'sparkle',
    character: 'Luna',
    difficulty: 'hard'
  },

  // Exercises 36-40: Nested conditions
  {
    id: 'event_36',
    category: 'events',
    level: 36,
    title: 'Weather Clothing',
    instructions: 'Help choose the right clothes based on weather AND temperature!',
    visualTheme: 'magic',
    interactionType: 'clicktrigger',
    solution: {
      type: 'clicktrigger',
      conditions: [
        { trigger: 'sunny_warm', condition: 'sunny_and_warm', action: 'wear_tshirt' },
        { trigger: 'sunny_cold', condition: 'sunny_and_cold', action: 'wear_jacket' },
        { trigger: 'rainy_any', condition: 'rainy', action: 'wear_raincoat' }
      ]
    },
    hints: [
      'Click to change weather and temperature',
      'IF sunny AND warm THEN wear t-shirt',
      'IF sunny AND cold THEN wear jacket',
      'IF rainy THEN wear raincoat'
    ],
    successAnimation: 'bounce',
    character: 'Luna',
    difficulty: 'hard'
  },
  {
    id: 'event_37',
    category: 'events',
    level: 37,
    title: 'Animal Habitats',
    instructions: 'Help animals find the right home based on type AND weather!',
    visualTheme: 'magic',
    interactionType: 'clicktrigger',
    solution: {
      type: 'clicktrigger',
      conditions: [
        { trigger: 'pet_sunny', condition: 'pet_and_sunny', action: 'pet_shade' },
        { trigger: 'wild_sunny', condition: 'wild_and_sunny', action: 'wild_play' },
        { trigger: 'any_rainy', condition: 'rainy', action: 'all_shelter' }
      ]
    },
    hints: [
      'Click to choose animal and weather',
      'IF pet AND sunny THEN find shade',
      'IF wild AND sunny THEN play outside',
      'IF any AND rainy THEN find shelter'
    ],
    successAnimation: 'dance',
    character: 'Luna',
    difficulty: 'hard'
  },
  {
    id: 'event_38',
    category: 'events',
    level: 38,
    title: 'Transportation Choices',
    instructions: 'Choose the right transport based on distance AND weather!',
    visualTheme: 'magic',
    interactionType: 'clicktrigger',
    solution: {
      type: 'clicktrigger',
      conditions: [
        { trigger: 'short_clear', condition: 'short_and_clear', action: 'walk' },
        { trigger: 'long_clear', condition: 'long_and_clear', action: 'bike' },
        { trigger: 'any_rainy', condition: 'rainy', action: 'car' }
      ]
    },
    hints: [
      'Click to set distance and weather',
      'IF short AND clear THEN walk',
      'IF long AND clear THEN bike',
      'IF any AND rainy THEN drive car'
    ],
    successAnimation: 'bounce',
    character: 'Luna',
    difficulty: 'hard'
  },
  {
    id: 'event_39',
    category: 'events',
    level: 39,
    title: 'Magic Spells',
    instructions: 'Cast the right spell based on target AND element!',
    visualTheme: 'magic',
    interactionType: 'clicktrigger',
    solution: {
      type: 'clicktrigger',
      conditions: [
        { trigger: 'friend_fire', condition: 'friend_and_fire', action: 'protect_spell' },
        { trigger: 'enemy_water', condition: 'enemy_and_water', action: 'freeze_spell' },
        { trigger: 'enemy_earth', condition: 'enemy_and_earth', action: 'wind_spell' }
      ]
    },
    hints: [
      'Click to choose target and element',
      'IF friend AND fire THEN protect',
      'IF enemy AND water THEN freeze',
      'IF enemy AND earth THEN wind spell'
    ],
    successAnimation: 'sparkle',
    character: 'Luna',
    difficulty: 'hard'
  },
  {
    id: 'event_40',
    category: 'events',
    level: 40,
    title: 'Complex Adventure',
    instructions: 'Help Luna navigate a complex magical adventure!',
    visualTheme: 'magic',
    interactionType: 'clicktrigger',
    solution: {
      type: 'clicktrigger',
      conditions: [
        { trigger: 'forest_day_key', condition: 'forest_day_and_key', action: 'open_treasure' },
        { trigger: 'forest_night_nokey', condition: 'forest_night_and_nokey', action: 'search_light' },
        { trigger: 'cave_any_monster', condition: 'cave_and_monster', action: 'fight_magic' },
        { trigger: 'castle_day_star', condition: 'castle_day_and_star', action: 'win_quest' }
      ]
    },
    hints: [
      'Click to navigate different areas',
      'Each location has multiple conditions',
      'IF forest AND day AND key THEN open treasure',
      'IF forest AND night AND no key THEN search with light',
      'IF cave AND monster THEN fight with magic',
      'IF castle AND day AND star THEN win quest'
    ],
    successAnimation: 'celebration',
    character: 'Luna',
    difficulty: 'hard'
  },

  // === LOOPING EXERCISES (41-60) ===

  // Exercises 41-45: Simple repeat (2-5 times)
  {
    id: 'loop_41',
    category: 'loops',
    level: 41,
    title: 'Jump 3 Times',
    instructions: 'Make Loopie the cat jump exactly 3 times!',
    visualTheme: 'patterns',
    interactionType: 'repeat',
    solution: {
      type: 'repeat',
      repetitions: { min: 3, max: 3, pattern: ['jump'] }
    },
    hints: [
      'Use the slider to set 3 jumps',
      'Watch Loopie jump 3 times',
      'Count each jump carefully'
    ],
    successAnimation: 'bounce',
    character: 'Loopie',
    difficulty: 'easy'
  },
  {
    id: 'loop_42',
    category: 'loops',
    level: 42,
    title: 'Meow 4 Times',
    instructions: 'Make Loopie meow exactly 4 times!',
    visualTheme: 'patterns',
    interactionType: 'repeat',
    solution: {
      type: 'repeat',
      repetitions: { min: 4, max: 4, pattern: ['meow'] }
    },
    hints: [
      'Set the slider to 4',
      'Loopie will meow 4 times',
      'Listen and count the meows'
    ],
    successAnimation: 'dance',
    character: 'Loopie',
    difficulty: 'easy'
  },
  {
    id: 'loop_43',
    category: 'loops',
    level: 43,
    title: 'Spin 2 Times',
    instructions: 'Make Loopie spin around exactly 2 times!',
    visualTheme: 'patterns',
    interactionType: 'repeat',
    solution: {
      type: 'repeat',
      repetitions: { min: 2, max: 2, pattern: ['spin'] }
    },
    hints: [
      'Set the repeat count to 2',
      'Watch Loopie spin 2 times',
      'Count each full rotation'
    ],
    successAnimation: 'sparkle',
    character: 'Loopie',
    difficulty: 'easy'
  },
  {
    id: 'loop_44',
    category: 'loops',
    level: 44,
    title: 'Wave 5 Times',
    instructions: 'Make Loopie wave hello exactly 5 times!',
    visualTheme: 'patterns',
    interactionType: 'repeat',
    solution: {
      type: 'repeat',
      repetitions: { min: 5, max: 5, pattern: ['wave'] }
    },
    hints: [
      'Use the slider to set 5 waves',
      'Count each wave carefully',
      'Loopie will wave 5 times'
    ],
    successAnimation: 'bounce',
    character: 'Loopie',
    difficulty: 'easy'
  },
  {
    id: 'loop_45',
    category: 'loops',
    level: 45,
    title: 'Stomp 1 Time',
    instructions: 'Make Loopie stomp exactly 1 time!',
    visualTheme: 'patterns',
    interactionType: 'repeat',
    solution: {
      type: 'repeat',
      repetitions: { min: 1, max: 1, pattern: ['stomp'] }
    },
    hints: [
      'Set the slider to 1',
      'Loopie will stomp once',
      'Sometimes 1 is the right number!'
    ],
    successAnimation: 'celebration',
    character: 'Loopie',
    difficulty: 'easy'
  },

  // Exercises 46-50: Counting loops with variables
  {
    id: 'loop_46',
    category: 'loops',
    level: 46,
    title: 'Count Jumping',
    instructions: 'Make Loopie jump and count each jump!',
    visualTheme: 'patterns',
    interactionType: 'repeat',
    solution: {
      type: 'repeat',
      repetitions: { min: 3, max: 3, pattern: ['jump', 'count'] }
    },
    hints: [
      'Loopie will jump and count each time',
      'Set to 3 for 3 counted jumps',
      'Watch the numbers appear'
    ],
    successAnimation: 'dance',
    character: 'Loopie',
    difficulty: 'medium'
  },
  {
    id: 'loop_47',
    category: 'loops',
    level: 47,
    title: 'Add Fish',
    instructions: 'Add fish to the pond using a loop!',
    visualTheme: 'patterns',
    interactionType: 'repeat',
    solution: {
      type: 'repeat',
      repetitions: { min: 4, max: 4, pattern: ['add_fish'] }
    },
    hints: [
      'Each loop adds one fish',
      'Set to 4 to add 4 fish',
      'Watch the pond fill with fish'
    ],
    successAnimation: 'sparkle',
    character: 'Loopie',
    difficulty: 'medium'
  },
  {
    id: 'loop_48',
    category: 'loops',
    level: 48,
    title: 'Build Tower',
    instructions: 'Build a tower by adding blocks in a loop!',
    visualTheme: 'patterns',
    interactionType: 'repeat',
    solution: {
      type: 'repeat',
      repetitions: { min: 5, max: 5, pattern: ['add_block'] }
    },
    hints: [
      'Each loop adds one block',
      'Set to 5 for a 5-block tower',
      'Watch the tower grow taller'
    ],
    successAnimation: 'bounce',
    character: 'Loopie',
    difficulty: 'medium'
  },
  {
    id: 'loop_49',
    category: 'loops',
    level: 49,
    title: 'Plant Flowers',
    instructions: 'Plant flowers in a row using a loop!',
    visualTheme: 'patterns',
    interactionType: 'repeat',
    solution: {
      type: 'repeat',
      repetitions: { min: 6, max: 6, pattern: ['plant_flower'] }
    },
    hints: [
      'Each loop plants one flower',
      'Set to 6 for 6 flowers',
      'Watch the beautiful row grow'
    ],
    successAnimation: 'sparkle',
    character: 'Loopie',
    difficulty: 'medium'
  },
  {
    id: 'loop_50',
    category: 'loops',
    level: 50,
    title: 'Light Stars',
    instructions: 'Light up stars in the night sky!',
    visualTheme: 'patterns',
    interactionType: 'repeat',
    solution: {
      type: 'repeat',
      repetitions: { min: 8, max: 8, pattern: ['light_star'] }
    },
    hints: [
      'Each loop lights up one star',
      'Set to 8 for 8 stars',
      'Watch the night sky light up'
    ],
    successAnimation: 'celebration',
    character: 'Loopie',
    difficulty: 'medium'
  },

  // Exercises 51-55: Pattern creation
  {
    id: 'loop_51',
    category: 'loops',
    level: 51,
    title: 'Jump-Spin Pattern',
    instructions: 'Create a jump-then-spin pattern!',
    visualTheme: 'patterns',
    interactionType: 'repeat',
    solution: {
      type: 'repeat',
      repetitions: { min: 3, max: 3, pattern: ['jump', 'spin'] }
    },
    hints: [
      'Loopie will jump then spin',
      'Set to 3 for 3 jump-spin pairs',
      'Watch the pattern repeat'
    ],
    successAnimation: 'dance',
    character: 'Loopie',
    difficulty: 'hard'
  },
  {
    id: 'loop_52',
    category: 'loops',
    level: 52,
    title: 'Meow-Wave Pattern',
    instructions: 'Create a meow-then-wave pattern!',
    visualTheme: 'patterns',
    interactionType: 'repeat',
    solution: {
      type: 'repeat',
      repetitions: { min: 4, max: 4, pattern: ['meow', 'wave'] }
    },
    hints: [
      'Loopie will meow then wave',
      'Set to 4 for 4 meow-wave pairs',
      'Listen and watch the pattern'
    ],
    successAnimation: 'bounce',
    character: 'Loopie',
    difficulty: 'hard'
  },
  {
    id: 'loop_53',
    category: 'loops',
    level: 53,
    title: 'Color Pattern',
    instructions: 'Create a red-blue color pattern!',
    visualTheme: 'patterns',
    interactionType: 'repeat',
    solution: {
      type: 'repeat',
      repetitions: { min: 5, max: 5, pattern: ['red', 'blue'] }
    },
    hints: [
      'The pattern is red then blue',
      'Set to 5 for 5 color pairs',
      'Watch the colors alternate'
    ],
    successAnimation: 'sparkle',
    character: 'Loopie',
    difficulty: 'hard'
  },
  {
    id: 'loop_54',
    category: 'loops',
    level: 54,
    title: 'Music Pattern',
    instructions: 'Create a do-re-mi musical pattern!',
    visualTheme: 'patterns',
    interactionType: 'repeat',
    solution: {
      type: 'repeat',
      repetitions: { min: 3, max: 3, pattern: ['do', 're', 'mi'] }
    },
    hints: [
      'Play do then re then mi',
      'Set to 3 for 3 musical sequences',
      'Listen to the musical pattern'
    ],
    successAnimation: 'dance',
    character: 'Loopie',
    difficulty: 'hard'
  },
  {
    id: 'loop_55',
    category: 'loops',
    level: 55,
    title: 'Shape Pattern',
    instructions: 'Create a circle-square pattern!',
    visualTheme: 'patterns',
    interactionType: 'repeat',
    solution: {
      type: 'repeat',
      repetitions: { min: 4, max: 4, pattern: ['circle', 'square'] }
    },
    hints: [
      'Draw a circle then a square',
      'Set to 4 for 4 shape pairs',
      'Watch the geometric pattern'
    ],
    successAnimation: 'celebration',
    character: 'Loopie',
    difficulty: 'hard'
  },

  // Exercises 56-60: Nested loops and complex patterns
  {
    id: 'loop_56',
    category: 'loops',
    level: 56,
    title: 'Grid Pattern',
    instructions: 'Create a 3x3 grid of dots!',
    visualTheme: 'patterns',
    interactionType: 'repeat',
    solution: {
      type: 'repeat',
      repetitions: { min: 3, max: 3, pattern: ['row_3_dots'] }
    },
    hints: [
      'Each loop creates a row of 3 dots',
      'Set to 3 for 3 rows',
      'Watch the grid form'
    ],
    successAnimation: 'sparkle',
    character: 'Loopie',
    difficulty: 'hard'
  },
  {
    id: 'loop_57',
    category: 'loops',
    level: 57,
    title: 'Staircase Pattern',
    instructions: 'Build a staircase with blocks!',
    visualTheme: 'patterns',
    interactionType: 'repeat',
    solution: {
      type: 'repeat',
      repetitions: { min: 4, max: 4, pattern: ['add_stair_step'] }
    },
    hints: [
      'Each loop adds one stair step',
      'Set to 4 for 4 steps',
      'Watch the staircase grow'
    ],
    successAnimation: 'bounce',
    character: 'Loopie',
    difficulty: 'hard'
  },
  {
    id: 'loop_58',
    category: 'loops',
    level: 58,
    title: 'Flower Garden Pattern',
    instructions: 'Create a garden pattern using nested loops!',
    visualTheme: 'patterns',
    interactionType: 'repeat',
    solution: {
      type: 'repeat',
      repetitions: { min: 3, max: 3, pattern: ['flower_row_with_petals'] }
    },
    hints: [
      'Each loop creates a flower with petals',
      'Set to 3 for 3 flowers',
      'Watch the beautiful garden pattern'
    ],
    successAnimation: 'celebration',
    character: 'Loopie',
    difficulty: 'hard'
  },
  {
    id: 'loop_59',
    category: 'loops',
    level: 59,
    title: 'Spiral Pattern',
    instructions: 'Create a spiral by drawing circles!',
    visualTheme: 'patterns',
    interactionType: 'repeat',
    solution: {
      type: 'repeat',
      repetitions: { min: 6, max: 6, pattern: ['expanding_circle'] }
    },
    hints: [
      'Each loop draws a bigger circle',
      'Set to 6 for 6 expanding circles',
      'Watch the spiral pattern form'
    ],
    successAnimation: 'dance',
    character: 'Loopie',
    difficulty: 'hard'
  },
  {
    id: 'loop_60',
    category: 'loops',
    level: 60,
    title: 'Rainbow Pattern',
    instructions: 'Create a rainbow by adding color arcs!',
    visualTheme: 'patterns',
    interactionType: 'repeat',
    solution: {
      type: 'repeat',
      repetitions: { min: 7, max: 7, pattern: ['color_arc'] }
    },
    hints: [
      'Each loop adds one rainbow color',
      'Set to 7 for all rainbow colors',
      'Watch the complete rainbow appear'
    ],
    successAnimation: 'celebration',
    character: 'Loopie',
    difficulty: 'hard'
  }
];

export const getExercisesByCategory = (category: 'sequencing' | 'events' | 'loops') => {
  return exercises.filter(exercise => exercise.category === category);
};

export const getExerciseById = (id: string) => {
  return exercises.find(exercise => exercise.id === id);
};

export const getExerciseByCategoryAndLevel = (category: 'sequencing' | 'events' | 'loops', level: number) => {
  return exercises.find(exercise => exercise.category === category && exercise.level === level);
};