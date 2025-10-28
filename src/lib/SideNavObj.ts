import { type Component } from 'svelte';
import RocketLabExperience from './detailsComponents/RocketLabExperience.svelte';

export const sideNavObj: {
	type: 'header' | 'clickable';
	name: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	details?: Component;
}[] = [
	{
		type: 'header',
		name: 'Experience'
	},
	{
		type: 'clickable',
		name: 'Rocket Lab',
		details: RocketLabExperience
	}
];
