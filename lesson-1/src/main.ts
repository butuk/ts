type Variant = {
    num: number,
    value: string,
};

type TwoVariants = {
    type: boolean,
    value: string,
};

type Question = {
    question: string,
};

type TextQuestion = Question & {
    type: 'text',
    answer: string,
};

type OneChoice = Question & {
    type: 'choice',
    variants: Variant[],
    answer: number,
};

type MultipleChoice = Question & {
    type: 'multi',
    variants: Variant[],
    answer: number[],
};

type TrueFalse = Question & {
    type: 'true-false',
    variants: TwoVariants[],
    answer: boolean,
};

type ChoseTrue = Question & {
    type: 'chose-true',
    variants: Variant[],
    answer: number[],
};

type AnyQuestion = TextQuestion | OneChoice | MultipleChoice | TrueFalse | ChoseTrue;

const questions : AnyQuestion[] = [
    {
        type: 'text',
        question: 'What will be the sum of 5 and 8',
        answer: '13',
    },
    {
        type: 'choice',
        question: 'What is the right variant for 2 × 2?',
        variants: [
            {num: 1, value: '3'},
            {num: 2, value: '4'},
            {num: 3, value: '5'},
        ],
        answer: 1,
    },
    {
        type: 'multi',
        question: 'Which of these is food?',
        variants: [
            {num: 1, value: 'ball'},
            {num: 2, value: 'banana'},
            {num: 3, value: 'meat'},
            {num: 4, value: 'rocket'}
        ],
        answer: [
            1, 2,
        ],
    },
    {
        type: 'true-false',
        question: 'Is it true or false that the Earth is round?',
        variants: [
            {type: true, value: 'yes'},
            {type: false, value: 'no'},
        ],
        answer: true,
    },
    {
        type: 'chose-true',
        question: 'Choose the right answer:',
        variants: [
            {num: 1, value: 'The sky is blue'},
            {num: 2, value: 'There are 7 days in a week'},
            {num: 3, value: 'There are 32 days in May'},
            {num: 4, value: 'Violet color does not exist'},
        ],
        answer: [
            0, 1,
        ]
    },
]