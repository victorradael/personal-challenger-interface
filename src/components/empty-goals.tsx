import { Plus } from 'lucide-react'
import { Button } from './ui/button'
import { DialogTrigger } from './ui/dialog'

import logo from '../assets/text-logo.svg'
import startImage from '../assets/start-image.svg'

export function EmptyGoals() {
    return (
        <div className="h-screen flex flex-col items-center justify-center gap-8">
            <img src={logo} alt="Personal Challenger Logo" />
            <img src={startImage} alt="Personal Challenger Start" />
            <p className='text-zinc-300 leading-relaxed max-w-80 text-center'>
                Você ainda não cadastrou nenhuma meta, que tal cadastrar um agora mesmo?
            </p>
            <DialogTrigger asChild>
                <Button>
                    <Plus className='size-4' />
                    Cadastrar meta
                </Button>
            </DialogTrigger>
        </div>

    )
}