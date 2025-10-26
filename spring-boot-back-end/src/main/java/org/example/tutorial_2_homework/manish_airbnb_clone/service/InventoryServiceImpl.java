package org.example.tutorial_2_homework.manish_airbnb_clone.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.example.tutorial_2_homework.manish_airbnb_clone.dto.HotelDto;
import org.example.tutorial_2_homework.manish_airbnb_clone.dto.HotelSearchRequest;
import org.example.tutorial_2_homework.manish_airbnb_clone.entity.Hotel;
import org.example.tutorial_2_homework.manish_airbnb_clone.entity.Inventory;
import org.example.tutorial_2_homework.manish_airbnb_clone.entity.Room;
import org.example.tutorial_2_homework.manish_airbnb_clone.repository.InventoryRepository;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.temporal.ChronoUnit;

@Service
@RequiredArgsConstructor
@Slf4j
public class InventoryServiceImpl implements InventoryService {
    private final ModelMapper modelMapper;

    private final InventoryRepository inventoryRepository;

    @Override
    public void initializeRoomForAYear(Room room) {
        LocalDate today = LocalDate.now();
        LocalDate endDate = today.plusYears(1);
        for (; !today.isAfter(endDate); today = today.plusDays(1)) {
            Inventory inventory = Inventory.builder()
                    .hotel(room.getHotel())
                    .room(room)
                    .bookedCount(0)
                    .reservedCount(0)
                    .city(room.getHotel().getCity())
                    .date(today)
                    .price(room.getBasePrice())
                    .surgeFactor(BigDecimal.ONE)
                    .totalCount(room.getTotalCount())
                    .closed(false)
                    .build();
            inventoryRepository.save(inventory);
        }
    }

    @Override
    public void deleteAllInventories(Room room) {
        inventoryRepository.deleteByRoom(room);
    }

    @Override
    public Page searchHotels(HotelSearchRequest hotels) {
        String city=hotels.getCity();
        int pageNumber = hotels.getPageNumber();
        int roomsCount=hotels.getRoomsCount();
        int pageSize = hotels.getPageSize();
        LocalDate startDate = hotels.getStartDate();
        LocalDate endDate = hotels.getEndDate();
        long dateCount = ChronoUnit.DAYS.between(startDate, endDate) + 1;
        Pageable pageable = PageRequest.of(pageNumber, pageSize);

        Page<Hotel> hotelPage =
                inventoryRepository.findHotelsWithAvailableInventory(city,
                        startDate, endDate, roomsCount, dateCount, pageable);

        return hotelPage.map((element) -> modelMapper.map(element, HotelDto.class));
    }
}
