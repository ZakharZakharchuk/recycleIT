package com.recycleit.recycleitbackend.entity;

import lombok.*;

import javax.persistence.*;

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
