package com.recycleit.recycleitbackend.repository;

import com.recycleit.recycleitbackend.entity.Rating;
import com.recycleit.recycleitbackend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.math.BigDecimal;

@Repository
@Transactional
public interface RatingRepository extends JpaRepository<Rating, Long> {

    Rating getByFacilityIdAndUserId(Long facilityId, User user);

    @Query(value = "select avg(r.mark) from Rating r where r.facilityId = :id")
    BigDecimal getAvgMarkByFacilityId(Long id);

}
