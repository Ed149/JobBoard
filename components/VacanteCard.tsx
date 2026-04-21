import { Job } from '@/lib/types'
import { normalizeString } from '@/utils/utils';
import { Button, Card, Chip, ChipLabel } from '@heroui/react'
import Link from 'next/link'
import { redirect } from 'next/navigation';
import { FavoriteBookmark } from './FavoriteBookmark';

interface Props {
    vacante: Job;
    variant: 'resume' | 'detail';
}

export const VacanteCard = ({ vacante, variant = 'resume' }: Props) => {

    const modality = vacante.modality.split('');
    modality[0].toUpperCase();

    return (
        <Card className="flex w-full rounded-xl">
            <Card.Header className='flex gap-2 flex-row justify-between'>
                <div>
                    <Card.Title className='font-bold text-xl'>{vacante.title}</Card.Title>
                    <Card.Description className='text-md'>
                        {vacante.company}
                    </Card.Description>
                    <Card.Description className='text-md'>
                        {vacante.location}
                    </Card.Description>
                </div>
                <FavoriteBookmark id={vacante.id} />

            </Card.Header>
            <Card.Footer className='flex justify-between'>
                <div className='flex gap-2'>
                    <Chip color='success' variant='soft'>
                        <ChipLabel className='font-bold ' style={{ color: '#20662c', fontSize: '14px' }}>
                            {`$${vacante.salary.min} - $${vacante.salary.max} ${vacante.salary.currency}`}
                        </ChipLabel>
                    </Chip>
                    <Chip color='accent' variant='soft'>
                        <ChipLabel style={{ color: 'blue', fontSize: '14px' }}>
                            {normalizeString(vacante.modality)}
                        </ChipLabel>
                    </Chip>
                </div>
                {
                    variant === 'resume' ? (<Link className='flex rounded-xl bg-accent w-32 h-9 items-center justify-center text-white active:opacity-90' href={`/vacante/${vacante.id}`}>
                        Ver Vacante
                    </Link>) : null
                }


            </Card.Footer>
        </Card >
    )
}
