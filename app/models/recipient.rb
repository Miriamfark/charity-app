class Recipient < ApplicationRecord
    has_many :donations 
    has_many :users, through: :donations

    def sum_donations 
        self.donations.inject(0){|sum,e| sum + e.amount }
    end
end
