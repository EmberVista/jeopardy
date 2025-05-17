export type QuestionsType = {
  id: string;
  category: string;
  question: string;
  answer: string;
  value: number;
  choices?: string[];
};

export type CategoryType = {
  id: string;
  title: string;
  questions: QuestionsType[];
};

export const categoriesData: CategoryType[] = [
  {
    id: 'place-value',
    title: 'Place Value & Algebraic Thinking',
    questions: [
      {
        id: 'place-value-100',
        category: 'Place Value & Algebraic Thinking',
        question: 'What is the place value of the digit 7 in the number 3,725,948?',
        answer: 'Ten thousands',
        value: 100,
        choices: ['Thousands', 'Ten thousands', 'Hundred thousands', 'Millions']
      },
      {
        id: 'place-value-200',
        category: 'Place Value & Algebraic Thinking',
        question: 'Round 3.856 to the nearest tenth.',
        answer: '3.9',
        value: 200,
        choices: ['3.8', '3.9', '4.0', '3.86']
      },
      {
        id: 'place-value-300',
        category: 'Place Value & Algebraic Thinking',
        question: 'Write 5,280,730 in expanded form.',
        answer: '5,000,000 + 200,000 + 80,000 + 700 + 30',
        value: 300
      },
      {
        id: 'place-value-400',
        category: 'Place Value & Algebraic Thinking',
        question: 'What property is shown in the equation: 3 × (4 + 2) = (3 × 4) + (3 × 2)?',
        answer: 'Distributive Property',
        value: 400,
        choices: ['Commutative Property', 'Associative Property', 'Identity Property', 'Distributive Property']
      },
      {
        id: 'place-value-500',
        category: 'Place Value & Algebraic Thinking',
        question: 'Write the number seven hundred billion, forty-five million, three hundred twenty-one in standard form.',
        answer: '700,045,000,321',
        value: 500
      }
    ]
  },
  {
    id: 'multiply-divide',
    title: 'Multiplying & Dividing',
    questions: [
      {
        id: 'multiply-divide-100',
        category: 'Multiplying & Dividing',
        question: 'What is 3.5 × 10?',
        answer: '35',
        value: 100,
        choices: ['3.5', '35', '350', '0.35']
      },
      {
        id: 'multiply-divide-200',
        category: 'Multiplying & Dividing',
        question: 'Calculate: 247 × 6',
        answer: '1,482',
        value: 200,
        choices: ['1,382', '1,482', '1,582', '1,422']
      },
      {
        id: 'multiply-divide-300',
        category: 'Multiplying & Dividing',
        question: 'Divide: 1,295 ÷ 25',
        answer: '51.8',
        value: 300
      },
      {
        id: 'multiply-divide-400',
        category: 'Multiplying & Dividing',
        question: 'Solve: 3 + 2 × [8 - (5 - 2)]',
        answer: '13',
        value: 400,
        choices: ['13', '15', '17', '11']
      },
      {
        id: 'multiply-divide-500',
        category: 'Multiplying & Dividing',
        question: 'Convert 4.5 kilometers to meters.',
        answer: '4,500 meters',
        value: 500
      }
    ]
  },
  {
    id: 'decimal-operations',
    title: 'Decimal Operations',
    questions: [
      {
        id: 'decimal-operations-100',
        category: 'Decimal Operations',
        question: 'Which decimal is equivalent to 3/4?',
        answer: '0.75',
        value: 100,
        choices: ['0.25', '0.50', '0.75', '0.80']
      },
      {
        id: 'decimal-operations-200',
        category: 'Decimal Operations',
        question: 'Calculate: 4.56 + 2.73',
        answer: '7.29',
        value: 200,
        choices: ['7.19', '7.29', '7.39', '6.29']
      },
      {
        id: 'decimal-operations-300',
        category: 'Decimal Operations',
        question: 'Calculate: 6.7 - 2.85',
        answer: '3.85',
        value: 300
      },
      {
        id: 'decimal-operations-400',
        category: 'Decimal Operations',
        question: 'Calculate: 2.5 × 0.4',
        answer: '1.0',
        value: 400,
        choices: ['0.1', '0.8', '1.0', '10.0']
      },
      {
        id: 'decimal-operations-500',
        category: 'Decimal Operations',
        question: 'Calculate: $24.50 ÷ 7',
        answer: '$3.50',
        value: 500
      }
    ]
  },
  {
    id: 'fraction-concepts',
    title: 'Fraction Concepts',
    questions: [
      {
        id: 'fraction-concepts-100',
        category: 'Fraction Concepts',
        question: 'How many minutes are in 2.5 hours?',
        answer: '150 minutes',
        value: 100,
        choices: ['120 minutes', '130 minutes', '150 minutes', '180 minutes']
      },
      {
        id: 'fraction-concepts-200',
        category: 'Fraction Concepts',
        question: 'What is the probability of rolling a 2 on a standard six-sided die?',
        answer: '1/6',
        value: 200,
        choices: ['1/2', '1/3', '1/6', '2/6']
      },
      {
        id: 'fraction-concepts-300',
        category: 'Fraction Concepts',
        question: 'Convert the improper fraction 17/4 to a mixed number.',
        answer: '4 1/4',
        value: 300
      },
      {
        id: 'fraction-concepts-400',
        category: 'Fraction Concepts',
        question: 'What is the equivalent fraction for 3/9 in simplest form?',
        answer: '1/3',
        value: 400,
        choices: ['1/3', '2/6', '3/6', '6/18']
      },
      {
        id: 'fraction-concepts-500',
        category: 'Fraction Concepts',
        question: 'Order these fractions from least to greatest: 2/3, 3/4, 5/8, 1/2',
        answer: '1/2, 5/8, 2/3, 3/4',
        value: 500
      }
    ]
  },
  {
    id: 'add-subtract-fractions',
    title: 'Adding & Subtracting Fractions',
    questions: [
      {
        id: 'add-subtract-fractions-100',
        category: 'Adding & Subtracting Fractions',
        question: 'Calculate: 1/4 + 2/4',
        answer: '3/4',
        value: 100,
        choices: ['1/2', '2/4', '3/4', '3/8']
      },
      {
        id: 'add-subtract-fractions-200',
        category: 'Adding & Subtracting Fractions',
        question: 'Calculate: 2/3 + 1/6',
        answer: '5/6',
        value: 200,
        choices: ['3/9', '1/2', '5/6', '3/6']
      },
      {
        id: 'add-subtract-fractions-300',
        category: 'Adding & Subtracting Fractions',
        question: 'Calculate: 5/8 - 1/4',
        answer: '3/8',
        value: 300
      },
      {
        id: 'add-subtract-fractions-400',
        category: 'Adding & Subtracting Fractions',
        question: 'Calculate: 3 2/5 + 1 3/5',
        answer: '5',
        value: 400,
        choices: ['4', '4 1/5', '4 5/5', '5']
      },
      {
        id: 'add-subtract-fractions-500',
        category: 'Adding & Subtracting Fractions',
        question: 'Calculate: 4 3/4 - 2 5/8',
        answer: '2 1/8',
        value: 500
      }
    ]
  },
  {
    id: 'multiply-divide-fractions',
    title: 'Multiplying & Dividing Fractions',
    questions: [
      {
        id: 'multiply-divide-fractions-100',
        category: 'Multiplying & Dividing Fractions',
        question: 'Calculate: 1/3 × 3',
        answer: '1',
        value: 100,
        choices: ['1', '3/3', '3', '1/9']
      },
      {
        id: 'multiply-divide-fractions-200',
        category: 'Multiplying & Dividing Fractions',
        question: 'Calculate: 2/5 × 3/4',
        answer: '6/20 or 3/10',
        value: 200,
        choices: ['5/9', '6/20', '3/10', '6/9']
      },
      {
        id: 'multiply-divide-fractions-300',
        category: 'Multiplying & Dividing Fractions',
        question: 'Calculate: 2 1/3 × 1/2',
        answer: '1 1/6',
        value: 300
      },
      {
        id: 'multiply-divide-fractions-400',
        category: 'Multiplying & Dividing Fractions',
        question: 'Calculate: 3/4 ÷ 1/2',
        answer: '1 1/2 or 3/2',
        value: 400,
        choices: ['3/8', '6/4', '3/2', '1 1/2']
      },
      {
        id: 'multiply-divide-fractions-500',
        category: 'Multiplying & Dividing Fractions',
        question: 'Calculate: 2 ÷ 2/3',
        answer: '3',
        value: 500
      }
    ]
  },
  {
    id: 'patterns-coordinate',
    title: 'Patterns & Coordinate Plane',
    questions: [
      {
        id: 'patterns-coordinate-100',
        category: 'Patterns & Coordinate Plane',
        question: 'What comes next in the pattern: 2, 4, 8, 16, __?',
        answer: '32',
        value: 100,
        choices: ['24', '30', '32', '64']
      },
      {
        id: 'patterns-coordinate-200',
        category: 'Patterns & Coordinate Plane',
        question: 'What is the coordinate for point A in the image? (Imagine a coordinate plane with a point at (-2, 3))',
        answer: '(-2, 3)',
        value: 200,
        choices: ['(2, 3)', '(-2, 3)', '(3, -2)', '(-3, 2)']
      },
      {
        id: 'patterns-coordinate-300',
        category: 'Patterns & Coordinate Plane',
        question: 'Which quadrant contains the point (3, -4)?',
        answer: 'Quadrant IV',
        value: 300
      },
      {
        id: 'patterns-coordinate-400',
        category: 'Patterns & Coordinate Plane',
        question: 'If I move 3 units left and 5 units up from the origin, what are my coordinates?',
        answer: '(-3, 5)',
        value: 400,
        choices: ['(3, 5)', '(-3, 5)', '(5, -3)', '(-3, -5)']
      },
      {
        id: 'patterns-coordinate-500',
        category: 'Patterns & Coordinate Plane',
        question: 'What is the distance between the points (1, 2) and (4, 6) on the coordinate plane?',
        answer: '5 units',
        value: 500
      }
    ]
  },
  {
    id: 'geometry-volume',
    title: 'Geometry & Volume',
    questions: [
      {
        id: 'geometry-volume-100',
        category: 'Geometry & Volume',
        question: 'What is the formula for the area of a rectangle?',
        answer: 'A = length × width',
        value: 100,
        choices: ['A = length × width', 'A = 1/2 × base × height', 'A = side × side', 'P = 2 × (length + width)']
      },
      {
        id: 'geometry-volume-200',
        category: 'Geometry & Volume',
        question: 'What is a polygon with 5 sides called?',
        answer: 'Pentagon',
        value: 200,
        choices: ['Hexagon', 'Pentagon', 'Octagon', 'Quadrilateral']
      },
      {
        id: 'geometry-volume-300',
        category: 'Geometry & Volume',
        question: 'Find the area of a triangle with base 8 cm and height 6 cm.',
        answer: '24 square cm',
        value: 300
      },
      {
        id: 'geometry-volume-400',
        category: 'Geometry & Volume',
        question: 'What is the formula for the volume of a rectangular prism?',
        answer: 'V = length × width × height',
        value: 400,
        choices: [
          'V = length × width × height', 
          'V = area of base × height', 
          'V = 4/3 × π × r³', 
          'V = side³'
        ]
      },
      {
        id: 'geometry-volume-500',
        category: 'Geometry & Volume',
        question: 'Find the volume of a rectangular prism with length 5m, width 3m, and height 4m.',
        answer: '60 cubic meters',
        value: 500
      }
    ]
  }
];