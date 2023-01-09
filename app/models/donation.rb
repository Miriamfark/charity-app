class Donation < ApplicationRecord
    validates :amount, numericality: { greater_than: 0 }
    belongs_to :user
    belongs_to :recipient
end
