package com.recycleit.recycleitbackend.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "support_questions")
@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class SupportQuestion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "author")
    private User author;

    @Column(name = "message")
    private String message;

    @Column(name = "answer")
    private String answer;

    @Column(name = "show_on_page")
    private Boolean showOnPage;

}
