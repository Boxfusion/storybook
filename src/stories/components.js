import React from 'react';

import { storiesOf } from '@storybook/react';

import Alert from '../components/Alert/Alert';
import Badge from '../components/Badge/Badge';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import Button from '../components/Breadcrumb/Breadcrumb';
import Card from '../components/Card/Card';
import Carousel from '../components/Carousel/Carousel';
import Code from '../components/Code/Code';
import Form from '../components/Form/Form';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Jumbotron from '../components/Jumbotron/Jumbotron';
import List from '../components/List/List';
import Modal from '../components/Modal/Modal';
import Pagination from '../components/Pagination/Pagination';
import Paragraph from '../components/Paragraph/Paragraph';
import Popover from '../components/Popover/Popover';
import Progress from '../components/Progress/Progress';
import Select from '../components/Select/Select';
import Table from '../components/Table/Table';
import Tooltip from '../components/Tooltip/Tooltip';

storiesOf('Components', module)
    .add('Alert', () => (<Alert />))
    .add('Badge', () => (<Badge />))
    .add('Breadcrumb', () => (<Breadcrumb />))
    .add('Button', () => (<Button />))
    .add('Card', () => (<Card />))
    .add('Carousel', () => (<Carousel />))
    .add('Code', () => (<Code />))
    .add('Form', () => (<Form />))
    .add('Header', () => (<Header />))
    .add('Hero', () => (<Hero />))
    .add('Jumbotron', () => (<Jumbotron />))
    .add('List', () => (<List />))
    .add('Modal', () => (<Modal />))
    .add('Pagination', () => (<Pagination />))
    .add('Paragraph', () => (<Paragraph />))
    .add('Popover', () => (<Popover />))
    .add('Progress', () => (<Progress />))
    .add('Select', () => (<Select />))
    .add('Table', () => (<Table />))
    .add('Tooltip', () => (<Tooltip />));	