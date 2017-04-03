students = [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
]

def names(arr):
	for elem in range(len(arr)):
		print arr[elem]["first_name"] + " " + arr[elem]["last_name"]

names(students)


users = {
 'Students': [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
  ],
 'Instructors': [
     {'first_name' : 'Michael', 'last_name' : 'Choi'},
     {'first_name' : 'Martin', 'last_name' : 'Puryear'}
  ]
 }

def usersII(obj):
	for key in obj:
		print key.upper()
		for i in range(len(obj[key])):
			print str(i) + " - " + obj[key][i]["first_name"].upper() + " " + obj[key][i]["last_name"].upper() + " - " + str(len(obj[key][i]["first_name"]) +len(obj[key][i]["last_name"]))

usersII(users)


# Pair Program:
# Kennedy Dessousa
# Kristeen Cal
