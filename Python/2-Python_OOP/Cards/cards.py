SUITS = ['Clubs', 'Hearts', 'Diamonds', 'Spades']
VALUES = ['Ace', '2','3','4','5','6','7','8', '9','10','Jack','Queen','King']

class Cards(object):
    def __init__(self, suits, values):
        self.values = values
        self.suits = suits

class Deck(object):
    def __init__(self):
        cards = []
        for suit in range(len(SUITS)):
            for value in range(len(VALUES)):
                card = Cards(SUITS[suit], VALUES[value])
                cards.append(card)
        for element in cards:
            print element.suits, element.values


deck = Deck()
