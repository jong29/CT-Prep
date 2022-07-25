#TODO: implement linke list
from dataclasses import dataclass


class node:
    def __init__(self, data) -> None:
        self.data = data
        self.next = None


class ll:
    def __init__(self) -> None:
        self.head = None
