"use client"
import { Alert, Button, Card, CloseButton, Form, Input, Label, Spinner, TextArea, TextField, toast } from '@heroui/react'
import { FormTextField } from './FormTextField'
import { useState } from 'react'

export const UserForm = () => {

    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
            toast.success("¡Postulacion exitosa!", {
                description: "Muy pronto nos pondremos en contacto contigo",
            });
        }, 1000)

    }
    return (
        <Form onSubmit={onSubmit}>
            <Card.Content>
                <div className="flex flex-col gap-4">
                    <div className='flex flex-row justify-between'>
                        <FormTextField label='Nombre' name='nombre' placeholder='Ingresa tu nombre' type='text' required={true} />
                        <FormTextField label='Email' name='email' placeholder='email@correo.com' type='email' required={true} />
                    </div>
                    <TextArea
                        aria-label="Quick project update"
                        className="h-32 w-full"
                        placeholder="Cuéntanos un poco del por qué estás interesado en esta posición"
                        variant='secondary'
                        required
                    />

                </div>
            </Card.Content>
            <Card.Footer className="mt-4 flex flex-col gap-2">
                <Button className="w-full rounded-xl" type="submit" isDisabled={isLoading}>
                    {
                        isLoading ? <Spinner size='sm' color='current' /> : null
                    }
                    Postularse Ahora
                </Button>

            </Card.Footer>

        </Form>
    )
}
