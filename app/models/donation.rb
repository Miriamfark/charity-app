class Donation < ApplicationRecord
    validates :amount, presence: true
    belongs_to :user
    belongs_to :recipient
end
