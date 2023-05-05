import { z } from 'zod';
import { useForm, zodResolver } from '@mantine/form';
import { NumberInput, TextInput, Button, Box, Group } from '@mantine/core';
import { useStepStore } from '@/store/stepStore';

interface Step2Props{
    previousStep: () => void; 
}

const schema = z.object({
    name: z.string().min(2, { message: 'Name should have at least 2 letters' }),
    email: z.string().email({ message: 'Invalid email' }),
    phone: z.string(),
});

const Step2 = ({previousStep } : Step2Props) => {

    const {setActive, experience} = useStepStore();

    const form = useForm({
        validate: zodResolver(schema),
        initialValues: {
            name: '',
            email: '',
            phone: '',
        },
    });
    
        return (
            <Box maw={340} mx="auto">
                <form
                    onSubmit={form.onSubmit((values) => {
                    console.log({...values, experience});
                    setActive(2);
                    
                })}>
                    <TextInput
                        withAsterisk
                        label="Email"
                        placeholder="example@mail.com"
                        {...form.getInputProps('email')}
                    />
                    <TextInput
                        withAsterisk
                        label="Name"
                        placeholder="John Doe"
                        mt="sm"
                        {...form.getInputProps('name')}
                    />
                    <TextInput
                        withAsterisk
                        label="Phone"
                        placeholder="1 (123) 456-7890"
                        mt="sm"
                        {...form.getInputProps('phone')}
                    />

                    <Group position="right" mt="xl">
                        <Button onClick={previousStep}>Previous</Button>
                        <Button type="submit">Submit</Button>
                    </Group>
                </form>
            </Box>
        );
}

export default Step2;