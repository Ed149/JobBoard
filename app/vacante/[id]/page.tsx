import { UserForm } from '@/components/UserForm';
import { VacanteCard } from '@/components/VacanteCard';
import { data } from '@/lib/imports';
import { Card, Chip } from '@heroui/react';
import { notFound } from 'next/navigation';


interface Props {
    params: Promise<{ id: string }>;
}
export default async function VacantePage({ params }: Props) {
    const { id } = await params;
    const vacante = data.find((vacante) => vacante.id === id);
    if (!vacante) return notFound();
    return (
        <main className="flex min-h-screen flex-col items-center p-24">
            <div className='flex flex-col w-[80%] gap-4'>
                <VacanteCard vacante={vacante} variant='detail' />
                <Card className="flex w-full rounded-xl">
                    <Card.Content className='flex gap-2 justify-between'>
                        <Card.Title className='text-lg font-bold'>Sobre el empleo</Card.Title>
                        <p >{vacante.description}</p>
                        <div className='flex flex-col gap-2'>
                            <Card.Title className='text-lg font-bold'>Conocimientos en las siguientes herramientas</Card.Title>
                            <div className='flex gap-2'>
                                {
                                    vacante.tags.map((tag) => (
                                        <Chip key={tag}>
                                            {tag}
                                        </Chip>
                                    )
                                    )
                                }
                            </div>
                        </div>
                    </Card.Content>

                </Card >
                <Card className="flex w-full rounded-xl">
                    <Card.Content className='flex gap-2 justify-between'>
                        <Card.Title className='text-lg font-bold'>Postulación</Card.Title>
                        <p >Si deseas ser parte del equipo de <span className='font-bold'>{vacante.company}</span>, por favor, llena el formulario debajo con tus datos y nos pondremos en contacto lo más pronto posible</p>
                        <UserForm />
                    </Card.Content>

                </Card >




            </div>
            {/* <footer className=' justify-end items-end'>
                {vacante.publishedAt}
            </footer> */}
        </main>
    )
}
