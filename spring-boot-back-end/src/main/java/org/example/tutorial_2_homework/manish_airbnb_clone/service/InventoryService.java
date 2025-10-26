package org.example.tutorial_2_homework.manish_airbnb_clone.service;

import org.example.tutorial_2_homework.manish_airbnb_clone.dto.HotelSearchRequest;
import org.example.tutorial_2_homework.manish_airbnb_clone.entity.Room;
import org.springframework.data.domain.Page;

public interface InventoryService {

    void initializeRoomForAYear(Room room);

    void deleteAllInventories(Room room);

    Page searchHotels(HotelSearchRequest hotelSearchRequest);
}
