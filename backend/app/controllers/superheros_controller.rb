class SuperherosController < ApplicationController
    def index 
        @superheros = Superhero.all 
        render json: @superheros 
    end

    def show 
        @superhero = Superhero.find(params[:id])
        render json: @superhero
    end
end