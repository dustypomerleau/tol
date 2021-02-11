tbl <- read.table(file.choose(),header=TRUE,sep=',')
population <- tbl[c("NAME","POPESTIMATE2009","NPOPCHG_2009")]
smallest.state.pop <- min(population$POPESTIMATE2009)
print(population[population$POPESTIMATE2009==smallest.state.pop,])

#utility functions

readinteger <- function()
{
  n <- readline(prompt="Enter an integer: ")
  if(!grepl("^[0-9]+$",n))
  {
    return(readinteger())
  }
  return(as.integer(n))
}

# real program start here

num <- round(runif(1) * 100, digits = 0)
guess <- -1

cat("Guess a number between 0 and 100.\n")

while(guess != num)
{
  guess <- readinteger()
  if (guess == num)
  {
    cat("Congratulations,", num, "is right.\n")
  }
  else if (guess < num)
  {
    cat("It's bigger!\n")
  }
  else if(guess > num)
  {
    cat("It's smaller!\n")
  }
}

sum(0:9)
append(LETTERS[1:13],letters[14:26])
c(1,6,4,9)*2
something <- c(1,4,letters[2])  # indices start at one, you get (1,4,"b")
length(something)

countdown <- function(from)
{
  print(from)
  while(from!=0)
  {
    Sys.sleep(1)
    from <- from - 1
    print(from)
  }
}

countdown(5)
