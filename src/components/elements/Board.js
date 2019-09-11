
import React from "react"
import styled from "styled-components"
import Cube from "./Cube"
import { rand } from "../../helpers/rand"
import { sizeCube } from "../../theme/sizes"

const cubes = 3
const textures = [

	"grass",
	"water"

].map(texture => ({ top: `${ texture }/top.png`, side: `${ texture }/side.png` }))

const heightMap = [

	[ 14, 18, 14 ],
	[ 10,  5, 10 ],
	[ 10,  5, 10 ]
]

const textureMap = [

	[  0,  0,  0 ],
	[  0,  1,  0 ],
	[  0,  1,  0 ]
]

const Board = () => (

	<Container isRotating>
		<Grid>
		{
			[...Array(cubes)].map((cube, y) =>

				[...Array(cubes)].map((cube, x) =>

					<Cube
						key={ x * y }
						height={ sizeCube * (heightMap[y][x] / 10) }
						offset={{ x: sizeCube * x, y: sizeCube * y }}
						textures={ textures[textureMap[y][x]] }
					/>
				)
			)
		}
		</Grid>
	</Container>
)

export default Board

const Container = styled.main`

	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100vh;
	transform: rotateX(45deg) rotateZ(45deg);
	transform-style: preserve-3d;

	${ ({ isRotating }) => isRotating && `

		animation: spin linear 25s infinite;

		@keyframes spin {

			from { transform: rotateX(45deg) rotateZ(45deg); }
			to { transform: rotateX(45deg) rotateZ(-675deg); }
		}

	`}
`

const Grid = styled.div`

	position: relative;
	width: ${ sizeCube * cubes }px;
	height: ${ sizeCube * cubes }px;
`
