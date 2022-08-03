import { Colors } from '../Colors';
import logo from '../../assets/black-king.png';
import { Cell } from '../Cell';
import { renderHook } from '@testing-library/react';

export enum FigureNames {
	FIGURE = "FIGURE",
	KING = "KING",
	KNIGHT = "KNIGHT",
	PAWN = "PAWN",
	ROOK = "ROOK",
	QUEEN = "QUEEN",
	BISHOP = "BISHOP",
}


export class Figure {
	color: Colors;
	logo: typeof logo | null;
	cell: Cell;
	name: FigureNames;
	id: number;

	constructor( color:Colors,  cell:Cell){
		this.color = color;
		this.cell = cell;
		this.cell.figure = this;
		this.logo = null;
		this.name = FigureNames.FIGURE
		this.id = Math.random()
	}

	canMove(target: Cell): boolean {
		return true;
	}

	moveFigure(target: Cell) {
		
	}
};
