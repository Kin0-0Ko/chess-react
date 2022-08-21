import { Cell } from './Cell';
import { Colors } from './Colors';
import { Bishop } from './figures/Bishop';
import { Figure } from './figures/Figure';
import { King } from './figures/King';
import { Knight } from './figures/Knight';
import { Pawn } from './figures/Pawn';
import { Queen } from './figures/Queen';
import { Rook } from './figures/Rook';

export class Board {
	cells: Cell[][] = [] 
	lostBlackFigures: Figure[] = []
	lostWhiteFigures: Figure[] = []

	public initCells() {
		for (let i = 0; i < 8; i++) {
			const row: Cell[] = []
			for (let j = 0; j < 8; j++) {
				if((i + j) % 2 !== 0){
					row.push(new Cell(this, j, i, Colors.BLACK, null)) // black cells
				}else{
					row.push(new Cell(this, j, i, Colors.WHITE, null)) // white
				}
				
			}
			this.cells.push(row)
		}
	};

	public getCopyBoard(): Board {
		const newBoard = new Board();
		newBoard.cells = this.cells;
		return newBoard
	}


	public highlightCells(selectedCell: Cell| null) {
		for (let i = 0; i < this.cells.length; i++) {
			const row = this.cells[i];
			for (let j = 0; j < row.length; j++) {
				const target = row[j]
				target.available = !!selectedCell?.figure?.canMove(target)
				
			}
		}
	}


	public getCell(x: number, y: number){
		return this.cells[x][y]
	}

	private addPawns() {
		for(let i = 0; i<8; i++){
			new Pawn(Colors.BLACK, this.getCell(1, i))
			new Pawn(Colors.WHITE, this.getCell(6, i))
		}
	}
	private addKings() {
		new King(Colors.BLACK, this.getCell(0, 4))
		new King(Colors.WHITE, this.getCell(7, 4))
	}	
	private addQueens() {
		new Queen(Colors.BLACK, this.getCell(0, 3))
		new Queen(Colors.WHITE, this.getCell(7, 3))
	}	
	private addBishops() {
		new Bishop(Colors.BLACK, this.getCell(0, 2))
		new Bishop(Colors.BLACK, this.getCell(0, 5))
		new Bishop(Colors.WHITE, this.getCell(7, 2))
		new Bishop(Colors.WHITE, this.getCell(7, 5))
	}	
	private addRooks() {
		new Rook(Colors.BLACK, this.getCell(0, 0))
		new Rook(Colors.BLACK, this.getCell(0, 7))
		new Rook(Colors.WHITE, this.getCell(7, 0))
		new Rook(Colors.WHITE, this.getCell(7, 7))
	}
	private addKnights() {
		new Knight(Colors.BLACK, this.getCell(0, 1))
		new Knight(Colors.BLACK, this.getCell(0, 6))
		new Knight(Colors.WHITE, this.getCell(7, 1))
		new Knight(Colors.WHITE, this.getCell(7, 6))
	}

	public addFigures() {
		this.addBishops()
		this.addKnights()
		this.addKings()
		this.addPawns() 
		this.addQueens()
		this.addRooks()
	}
}