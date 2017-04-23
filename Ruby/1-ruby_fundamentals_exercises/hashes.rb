# .delete(key) deletes the key-value pair and returns the value from hsh whose key is equal to key.

# h = {first_name: "Coding", last_name: "Dojo"}
# h.delete :last_name
# puts h

# .empty? => returns true if hash contains no key-value pairs
# h = {}
# puts h.empty?

# # .has_key?(key) returns true if given key is present
# h = {first_name: "Coding", last_name: "Dojo"}
# puts h.has_key? :first_name # => true
# puts h.has_key? "first_name" # => false
#
# # .has_value?(value) returns true if given value is present for some key
h = {first_name: "Coding", last_name: "Dojo"}
puts h.has_value? "Coding" # => true
puts h.has_value? "Bootcamp" # => false
