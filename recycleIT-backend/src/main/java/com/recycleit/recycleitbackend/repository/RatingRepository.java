package com.recycleit.recycleitbackend.repository;

import com.recycleit.recycleitbackend.entity.Rating;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
@Transactional
public interface RatingRepository extends JpaRepository<Rating, Long> {
    List<Rating> getRatingsByFacilityId(Long id);

    @Modifying
    @Query(value = "update Rating r set r.mark = :mark where r.userId= :userId and r.facilityId = :facilityId ")
    void changeRating(Long userId, Long facilityId, Integer mark );
}
