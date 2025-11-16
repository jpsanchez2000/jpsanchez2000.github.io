import { type Component } from 'svelte';
import RocketLabExperience from './detailsComponents/RocketLabExperience.svelte';
import ComputerScienceTutor from './detailsComponents/ComputerScienceTutor.svelte';
import TeachingAssistant from './detailsComponents/TeachingAssistant.svelte';
import HomePage from './HomePage.svelte';

export const sideNavObj: {
	type: 'header' | 'clickable' | 'listElement';
	name: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	details?: Component;
}[] = [
	{
		type: 'header',
		name: 'About'
	},
	{
		type: 'clickable',
		name: "Hi!👋 My name is Jude.\nI'm a Software Engineer located in Albuquerque, New Mexico.",
		details: HomePage
	},
	{
		type: 'header',
		name: 'Experience'
	},
	{
		type: 'clickable',
		name: 'Rocket Lab, SWE 2',
		details: RocketLabExperience
	},
	{
		type: 'clickable',
		name: 'Computer Science Tutor',
		details: ComputerScienceTutor
	},
	{
		type: 'clickable',
		name: 'Teaching Assistant',
		details: TeachingAssistant
	},
	{
		type: 'header',
		name: 'Education'
	},
	{
		type: 'listElement',
		name: 'University of New Mexico, BS in CS'
	},
	{
		type: 'header',
		name: 'Skills'
	},
	{
		type: 'listElement',
		name: 'JavaScript/TypeScript'
	},
	{
		type: 'listElement',
		name: 'SQL'
	},
	{
		type: 'listElement',
		name: 'Kubernetes'
	},
	{
		type: 'listElement',
		name: 'Docker'
	},
	{
		type: 'listElement',
		name: 'Git'
	},
	{
		type: 'listElement',
		name: 'Python'
	},
	{
		type: 'listElement',
		name: 'Postgres'
	},
	{
		type: 'listElement',
		name: 'MS Sql Server'
	},
	{
		type: 'listElement',
		name: 'Argo CD'
	},
	{
		type: 'header',
		name: 'Hobbies/Fun'
	},
	{
		type: 'listElement',
		name: 'Soccer'
	},
	{
		type: 'listElement',
		name: 'Movies/Shows'
	},
	{
		type: 'listElement',
		name: 'Cooking'
	}
];
