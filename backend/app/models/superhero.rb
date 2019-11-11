class Superhero < ActiveRecord::Base

  def kgs_to_i(number)
    Superhero.all.sample.weight_kgs.split[0].to_i
  end


  def lbs_to_i(number)
    Superhero.all.sample.weight_lbs.split[0].to_i
  end


  def self.most_common(element)
    Superhero.all.group(element).count.sort_by { |key, value| value }.reverse[0]
  end


  def self.top_twenty(element)
    Superhero.all.group(element).count.sort_by { |key, value| value }.reverse[0..19]
  end


  def self.count
    Superhero.calculate(:count, :all)
  end

end
