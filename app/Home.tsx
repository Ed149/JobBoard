"use client"
import { VacanteCard } from '@/components/VacanteCard';
import { data } from '@/lib/imports';
import { InputGroup, TextField, Select, ListBox } from '@heroui/react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Key, useState } from 'react';
import { IoIosSearch } from 'react-icons/io';

export const Home = () => {
  const searchParams = useSearchParams()
  const router = useRouter();
  const pathname = usePathname();
  const buscar = searchParams.get("buscar") ?? "";
  const modalidad = searchParams.get("modalidad") ?? "todos";
  const ubicacion = searchParams.get("ubicacion") ?? "";

  const vacantes = data.filter((vacante) => {
    const matchBuscar = vacante.title.toLowerCase().includes(buscar.toLowerCase());
    const matchModalidad =
      modalidad === "todos" ||
      vacante.modality.toLowerCase() === modalidad.toLowerCase();
    const matchUbicacion = vacante.location
      .toLowerCase()
      .includes(ubicacion.toLowerCase());
    return matchBuscar && matchModalidad && matchUbicacion;
  });

  const updateParam = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (!value) {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    router.replace(`${pathname}?${params.toString()}`);
  };

  const handleChangeModality = (text: Key | null) => {
    if (!text || text === "todos") {
      updateParam("modalidad", "");
      return;
    }
    updateParam("modalidad", String(text));
  }

  return (

    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className='flex flex-col w-full items-center gap-4'>
        <TextField className="w-[80%] rounded-xl " name="search" onChange={(text) => updateParam("buscar", text)} aria-label='Buscar'>
          <InputGroup>
            <InputGroup.Prefix>
              <IoIosSearch />
            </InputGroup.Prefix>
            <InputGroup.Input className="w-full max-w-70 h-12" placeholder="Buscar empleo" name='buscar' id='buscar' value={buscar} />
          </InputGroup>
        </TextField>

        <div className='flex gap-4'>
          <Select className="w-[256px]" defaultValue={modalidad} placeholder="Selecciona una modalidad" aria-label='modalidad' onChange={handleChangeModality}>
            <Select.Trigger>
              <Select.Value />
              <Select.Indicator />
            </Select.Trigger>
            <Select.Popover>
              <ListBox >
                <ListBox.Item id="todos" textValue="Todos">
                  Todos
                  <ListBox.ItemIndicator />
                </ListBox.Item>
                <ListBox.Item id="presencial" textValue="Presencial">
                  Presencial
                  <ListBox.ItemIndicator />
                </ListBox.Item>
                <ListBox.Item id="remoto" textValue="Remoto">
                  Remoto (Home Office)
                  <ListBox.ItemIndicator />
                </ListBox.Item>
                <ListBox.Item id="híbrido" textValue="Híbrido">
                  Híbrido
                  <ListBox.ItemIndicator />
                </ListBox.Item>
              </ListBox>
            </Select.Popover>
          </Select>

          <TextField className="w-[256px] h-7 rounded-xl " name="buscarUbicacion" onChange={(text) => updateParam("ubicacion", text)} aria-label='Buscar Ubicacion'>
            <InputGroup>
              <InputGroup.Prefix>
                <IoIosSearch />
              </InputGroup.Prefix>
              <InputGroup.Input className="w-full max-w-70 h-12" placeholder="Buscar ubicación" name='buscarUbicacion' id='buscarUbicacion' value={ubicacion} />
            </InputGroup>
          </TextField>
        </div>

      </div>
      <section className='flex flex-col gap-4 p-4 w-full items-center'>
        {
          vacantes?.map((vacante) => (<VacanteCard key={vacante.id} vacante={vacante} variant='resume' />))
        }
      </section>
    </main>
  );
}
