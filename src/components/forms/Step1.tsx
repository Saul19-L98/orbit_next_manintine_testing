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
        justifyContent: 'center',
    },
    formFlex:{
        display: 'flex',
        justifyContent: 'center',
    },
    nextButton: {
        fontSize: '1.2rem',
        backgroundColor: '#fab817',
        '&:hover': {
            backgroundColor: '#fab817',
        },
    },
    hiddenRadio: {
        display: 'none',
    },

    labelTitle: {
        fontSize: '1.87rem',
        fontWeight: 700,
        color: '#fff',
        textAlign: 'center'
    },
    labelInner:{
        backgroundColor: '#0c2033',
        padding: theme.spacing.md,
        borderRadius: theme.radius.sm,
        color: '#fff',
        cursor: 'pointer',
        display: 'inline-block',
        '&:hover': {
            outline:'2px solid #fab817',
            cursor: 'pointer',
        },
    },
    labelInnerSelected:{
        backgroundColor: '#0c2033',
        padding: theme.spacing.md,
        borderRadius: theme.radius.sm,
        color: '#fff',
        cursor: 'pointer',
        display: 'inline-block',
        outline: '2px solid #fab817',
        '&:hover': {
            outline:'2px solid #fab817',
            cursor: 'pointer',
        },
    },
    customRadio:{
        '&:input[type="radio"]:checked + label':{
                outline: '2px solid yellow',
        }
    },
    error:{
        textAlign: 'center',
        fontSize: '1.2rem',
        paddingTop: '1rem'
    }
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
            options: '',
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
                    classNames={{label: classes.labelTitle,error:classes.error}}
                    {...form.getInputProps('options')}>
                    <Flex mt={{base:'xl',400:'md'}} justify={{base:'center'}} direction={{base:'column',md:'row'}}  gap={14}>
                        {optionLabels.map(({value}) => (
                            <div key={value} className={classes.group}>
                                <Radio
                                    w={{base:'18.75rem'}} 
                                    value={value} 
                                    label={value} 
                                    onClick={() => handleRadioClick(value)}
                                    className={classes.customRadio}
                                    classNames={{inner: classes.hiddenRadio, label: form.values.options === `${value}` ? classes.labelInnerSelected :  classes.labelInner}}
                                />
                            </div>
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