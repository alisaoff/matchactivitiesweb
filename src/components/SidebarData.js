import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import { actionBegin } from '@syncfusion/ej2-schedule';

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: 'Agendas de Treinos',
        path: '/agendas',
        icon: <IoIcons.IoIosPaper/>,
        cName: 'nav-text'
    },
    {
        title: 'Alunos',
        path: '/alunos',
        icon: <IoIcons.IoMdPeople/>,
        cName: 'nav-text'
    },
    {
        title: 'Suporte',
        path: '/suporte',
        icon: <IoIcons.IoMdHelpCircle/>,
        cName: 'nav-text'
    },
    {
        title: 'Sair',
        path:  '/sair',
        icon:  <IoIcons.IoMdExit/>,
        cName: 'nav-text',
    }
]

