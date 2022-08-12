launching:

launch precompiled build : yarn build
launch dev server hot : yarn dev

launch the json server on port 3001 :
json-server ./data/db.json -p 3001

data we need to track:
-- solution
  -- 5 letter string 'drain'
-- past guesses
  -- an array of past guesses
  -- each past guess is an array of 5 letter-object [{}, {}, {}, {}, {}]
  -- each object-letter is represented like {key: 'a', color: 'yellow'}
-- current guess
  -- string 'hello'
-- keypad letters
  -- array of letters objects [{key: 'a', color: 'green'}, {}, ....]
-- number of turns
  -- an integer 0 - 6

game process:
  -- entering words:
    -- user enters a letter & a square is filled with that letter
    -- when a user hits delete it deletes the previous letter
    -- when a user hits enter it submits the word
      -- if all squares are not filled with letters then the word is not submitted
      -- if that word has been already submitted then the word is not submitted
    -- checking submitted words:
      -- each letter is checked to see if it matches to the solution
      -- each letter is assigned a color, based on it's inclusion in the solution
        -- exact matches --> green
        -- partial matches (correct letter, not in the right place) --> yellow
        -- none of them --> grey
    -- the guess is added the grid with the correct colors
    -- the current guess moves to the next row
    -- the keypad letters are updated (colors)
  -- ending the game
    -- when the guessed word fully matches the solution
      -- modal to say 'well done'
    -- when the user runs out of guesses
      -- modal to say 'unlucky'


Solution data:
1 - 3rd party api
2 - own database
3 - json file
