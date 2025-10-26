package org.example.tutorial_2_homework.manish_airbnb_clone.repository;

import jakarta.persistence.LockModeType;
import org.example.tutorial_2_homework.manish_airbnb_clone.entity.Hotel;
import org.example.tutorial_2_homework.manish_airbnb_clone.entity.Inventory;
import org.example.tutorial_2_homework.manish_airbnb_clone.entity.Room;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Lock;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.List;

public interface InventoryRepository extends JpaRepository<Inventory, Long> {

    void deleteByRoom(Room room);

    @Transactional
    @Query("""
            SELECT DISTINCT  i.hotel
            FROM Inventory i 
            WHERE i.city = :city 
                 AND i.date BETWEEN :startDate AND :endDate 
                 AND i.closed=false
                 AND (i.totalCount - i.bookedCount-i.reservedCount)>=:roomsCount
            GROUP BY i.hotel , i.room
            HAVING COUNT (i.date) =:dateCount
                        """)
    Page<Hotel> findHotelsWithAvailableInventory(
            @Param("city") String city,
            @Param("startDate") LocalDate startDate,
            @Param("endDate") LocalDate endDate,
            @Param("roomsCount") Integer roomsCount,
            @Param("dateCount") Long dateCount,
            Pageable pageable);
@Query("""
        SELECT i 
        FROM Inventory i
        WHERE i.room.id=:roomId 
                 AND i.date BETWEEN :startDate AND :endDate 
                 AND i.closed=false
                 AND (i.totalCount - i.bookedCount-i.reservedCount)>=:roomsCount        
        
        """)
    @Lock(LockModeType.PESSIMISTIC_WRITE)
    List<Inventory> findAllAndLockAvailableInventory(@Param("roomId") Long roomId,
                                                     @Param("startDate") LocalDate startDate,
                                                     @Param("endDate") LocalDate endDate,
                                                     @Param("roomsCount") Integer roomsCount);
}
