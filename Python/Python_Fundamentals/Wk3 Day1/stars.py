# Paired programmed with:
# Kennedy Dessousa
# Ulysis Morales

# Stars
def draw_stars1(stars):
    for value in range(len(stars)):
        string = ""
        for i in range(0, stars[value]):
            string += "*"
            print string


print(draw_stars1([2,3, 5]))


b = [4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"]

def draw_stars(stars):
    for value in range(len(stars)):
        string = ""
        z = 0
        if type(stars[value]) is int:
            while z < stars[value]:
                string += "*"
                z += 1
            print string
        elif type(stars[value]) is str:
            while z < len(stars[value]):
                string += stars[value][0].lower()
                z+=1
            print string

print(draw_stars(b))
