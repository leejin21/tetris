# Tetris grame

## Introduction

My main language is python, but I thought maybe I should not settle down and learn more, so that I can survive in this world.
I started thinking about why not develop a game project?
so I planned to make super easy game: tetris, which other developers has developed the game for decades.

So my goal for this project is:

1. getting used to js grammar
2. getting used to js librarys and frameworks
3. getting used to make small project and develop to a bigger project by adding additional functions

and most importantly, improve my learning skills.

## Features

Maybe I would add some features if I am free.

-   Basic tetris features

1. basic frame
    - board: (10, 20)
    - tetromino: I, J, L, O, S, T, Z
2. basic action
    - (soft drop) As time pass, tetromino goes down
    - up key: tetromino rotates for 90degrees
    - down key: (hard drop) goes down with faster speed
    - left key: goes left(for one block)
    - right key: goes right(for one block)
3. basic rule
    - If tetromino crashes other tetromino or gets to the bottom, it stops.
    - If one row is full of tetromino blocks, then the row disappears and the upper rows goes down until it meets other tetromno blocks or the bottom.
    - If tetromino stops and its top is upper than the board's top, then the game ends.
4. point rule(temporary)
    - when one row gets cleared: 10 points
