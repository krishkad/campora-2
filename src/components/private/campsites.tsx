
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import CampsiteForm from './campsite-form';



const Campsites = () => {




    return (
        <div className='max-w-4xl mx-auto'>
            <Card className='w-full'>
                <CardHeader>
                    <CardTitle>
                        Campsites Information
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <CampsiteForm />
                </CardContent>
            </Card>
        </div>
    )

}
export default Campsites;

