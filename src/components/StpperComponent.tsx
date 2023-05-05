import { useState } from 'react';
import { Stepper, Button, Group } from '@mantine/core';
import { useStepStore } from '../store/stepStore';

function StpperComponent() {
    const { active,setActive } = useStepStore();
    
    return (
        <>
            <Stepper active={active} onStepClick={setActive} breakpoint="sm">
                <Stepper.Step label="First step" description="Create an account">
                    Step 1 content: Start
                </Stepper.Step>
                <Stepper.Step description="Line indicating a step" />
                
                <Stepper.Completed>
                    End of the form
                </Stepper.Completed>
            </Stepper>

            {/* <Group position="center" mt="xl">
                <Button variant="default" onClick={prevStep}>Back</Button>
                <Button onClick={nextStep}>Next step</Button>
            </Group> */}
        </>
    );
}

export default StpperComponent;