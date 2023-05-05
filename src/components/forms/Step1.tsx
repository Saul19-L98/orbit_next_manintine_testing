import { z } from 'zod';
import { Radio, Button, Group, Box, createStyles, Flex } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { useStepStore } from '@/store/stepStore';

interface Step1Props{
    nextStep: () => void;
}

const useStyles = createStyles((theme) => ({
    group: {
        display: 'flex',
        flexDirection: 'row',
    },
    nextButton: {
        backgroundColor: theme.colors.yellow[6],
        '&:hover': {
            backgroundColor: theme.colors.yellow[7],
        },
    },
    hiddenRadio: {
        display: 'none',
    },
    label: {
        backgroundColor: theme.colors.blue[6],
        padding: theme.spacing.md,
        borderRadius: theme.radius.sm,
        color: theme.white,
        cursor: 'pointer',
        display: 'inline-block',
        '&:hover': {
            outline:'2px solid #fab817',
            cursor: 'pointer',
        },
    },
}));

const schema = z.object({
    options: z.string().nonempty(),
});

const Step1 = ({ nextStep }: Step1Props) => {
    const {classes} = useStyles();

    const {setExperience} = useStepStore();

    const form = useForm({
        validate: zodResolver(schema),
        initialValues: {
            options: 'option1',
        }
    });

    const optionLabels = [
        {value:'I am new to mortgage investing'},
        {value:'I have existing mortgage investments'} , 
        {value:'I have invested in mortgages in the past'}
    ]

    const handleRadioClick = (option: string) => {
        if (form.values.options !== option) {
            setExperience(option);
            nextStep();
        }
    };

    return (
        <Box maw="auto" mx="auto">
            <form onSubmit={form.onSubmit(({options}) => {
                setExperience(options);
                nextStep();
            })}>
                <Radio.Group
                    name="options"
                    label="What is your experience with Mortgage Investing"
                    {...form.getInputProps('options')}>
                    <Flex mt={{base:'xl',400:'md'}} bg={{base:'grape',md:'indigo'}} direction={{base:'column',md:'row'}} gap={14}>
                        {optionLabels.map(({value}) => (
                            <Radio 
                                key={value}
                                value={value} 
                                label={value} 
                                onClick={() => handleRadioClick(value)}
                                className={`${classes.hiddenRadio}, ${classes.label}`}
                                classNames={{inner: classes.hiddenRadio}}
                                sx={{outline: form.values.options === `${value}` ? '2px solid #fab817' : 'none'}}
                            />
                        ))}
                    </Flex>
                </Radio.Group>

                <Group position="right" mt="md">
                    <Button type='submit' className={classes.nextButton}>
                        Next
                    </Button>
                </Group>
            </form>
    </Box>
    );
};

export default Step1;