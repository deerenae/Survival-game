class SheltersController < ApplicationController
    def index
        shelters = Shelter.all 
        render json: shelters
    end
    def show
        shelter = Shelter.find(params[:id])
        render json: shelter 
    end
    def create
        shelter = Shelter.create(
            name: params[:name],
            rating: params[:rating],
            image: params[:image]
        )
        render json: shelter
    end 
    def update
        shelter = Shelter.find(params[:id])
        shelter = Shelter.create(
            name: params[:name],
            rating: params[:rating],
            image: params[:image]
        )
        render json: shelter 
    end
    def destroy
        shelter = Shelter.find(params[:id])
        shelters.destroy 
    end   
end
