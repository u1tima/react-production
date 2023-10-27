import { AboutPage } from 'pages/AboutPage';
import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';

export enum AppRotes {
	MAIN = 'Main',
	ABOUT = 'About',
}

export const RoutePath: Record<AppRotes, string> = {
	[AppRotes.MAIN]: '/',
	[AppRotes.ABOUT]: '/about',
};

export const routeConfig: Record<AppRotes, RouteProps> = {
	[AppRotes.MAIN]: {
		path: RoutePath.Main,
		element: <MainPage />,
	},
	[AppRotes.ABOUT]: {
		path: RoutePath.About,
		element: <AboutPage />,
	},
};
