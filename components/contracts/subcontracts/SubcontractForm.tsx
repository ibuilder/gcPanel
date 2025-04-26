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

export default function SubcontractForm() {
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
    
      
        
          Subcontract Form
          Create a new Subcontract
        
        
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            
              Title
              <Input
                type="text"
                id="title"
                placeholder="Enter contract title"
                {...register('title', {required: 'Title is required'})}
              />
              {errors.title && (
                
                  {errors.title.message}
                
              )}
            
            
              Description
              <Input
                type="text"
                id="description"
                placeholder="Enter contract description"
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
