import { z } from 'zod';
import { useForm, zodResolver } from '@mantine/form';
import { Flex, TextInput, Button, Box, Group,createStyles } from '@mantine/core';
import { useStepStore } from '@/store/stepStore';

interface Step2Props{
    previousStep: () => void; 
}

const useStyles = createStyles(()=>({
    title:{
        color:'#fff',
        textAlign:'center',
    },
    buttons:{
        display: 'flex',
        justifyContent:'space-between',  
    },
    nextButton: {
        fontSize: '1.2rem',
        backgroundColor: '#fab817',
        '&:hover': {
            backgroundColor: '#fab817',
        },
    },
    transparentInput:{
        background: 'transparent',
        border: 'none',
        borderBottom: '1px solid #fff',
        borderRadius: 0,
        boxShadow: 'none',
        '&:focus': {
            borderBottom: '2px solid #fab817',
            transition: '0.1s',
        },
    },
    error:{
        textAlign: 'center',
        fontSize: '1.2rem',
        paddingTop: '1rem'
    }
}))

const schema = z.object({
    name: z.string().min(2, { message: 'Name should have at least 2 letters' }),
    email: z.string().email({ message: 'Invalid email' }),
    phone: z.string(),
});

const Step2 = ({previousStep } : Step2Props) => {

    const {setActive, experience} = useStepStore();
    const {classes} = useStyles();

    const form = useForm({
        validate: zodResolver(schema),
        initialValues: {
            name: '',
            email: '',
            phone: '',
        },
    });
    
        return (
            <Box maw={800} mx="auto">
                <h2 className={classes.title}>What is your contact information</h2>
                <form
                    onSubmit={form.onSubmit((values) => {
                    console.log({...values, experience});
                    setActive(2);
                    
                })}>
                    <Flex justify={{base:'center'}} direction={{base:'column'}}  gap={20}>
                        <TextInput
                            classNames={{input:classes.transparentInput}}
                            placeholder="example@mail.com"
                            {...form.getInputProps('email')}
                        />
                        <TextInput
                            classNames={{input:classes.transparentInput}}
                            placeholder="John Doe"
                            mt="sm"
                            {...form.getInputProps('name')}
                        />
                        <TextInput
                            classNames={{input:classes.transparentInput}}
                            placeholder="1 (123) 456-7890"
                            mt="sm"
                            {...form.getInputProps('phone')}
                        />
                    </Flex>

                    <Group position="right" mt="xl" className={classes.buttons}>
                        <Button onClick={previousStep} className={classes.nextButton}>Previous</Button>
                        <Button type="submit" className={classes.nextButton}>Submit</Button>
                    </Group>
                </form>
            </Box>
        );
}

export default Step2;