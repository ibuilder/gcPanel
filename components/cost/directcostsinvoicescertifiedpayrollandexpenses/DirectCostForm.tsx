'use client';

import {Button} from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';
import {useForm} from 'react-hook-form';

export default function DirectCostForm() {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSubmit = data => {
    console.log('Form submitted:', data);
    // Here you would typically handle the form submission,
    // such as sending the data to an API endpoint.
  };

  return (
    
      
        
          Direct Cost Form
          Create a new Direct Cost
        
        
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            
              Title
              <Input
                type="text"
                id="title"
                placeholder="Enter cost title"
                {...register('title', {required: 'Title is required'})}
              />
              {errors.title && (
                
                  {errors.title.message}
                
              )}
            
            
              Description
              <Input
                type="text"
                id="description"
                placeholder="Enter cost description"
                {...register('description', {
                  required: 'Description is required',
                })}
              />
              {errors.description && (
                
                  {errors.description.message}
                
              )}
            
            <Button type="submit">Submit</Button>
          </form>
        
      
    
  );
}
