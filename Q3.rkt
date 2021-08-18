#lang racket

; Question 3.1

; Signiture: cs(word, prevIsE, prevIsO,prevIsVowel,
;                  prevPrevIsVowel, lastIsMerged)
; Purpose: To compute the number of syllables in a word,
; such that each vowel is concerned as a syllables, and:
; (1) One vowel in the end of a word isn't counted
; as a syllable.
; (2) 2 vowels in the end of a word isn't counted
; as a syllable
; (3) 'e' following 'e' is counted as one syllable.
; (4) 'a' following 'e' is counted as one syllable.
; (5) 'a' following 'o' is counted as one syllable.
; Type: (list, boolean, boolean, boolean, boolean, boolean) => number
; Pre-condition:
;   - word is a list of letters.
;   - prevIsE, prevIsO,prevIsVowel,
;       prevPrevIsVowel and lastIsMerged
;       all are #false

(define cs
  (lambda(word prevIsE prevIsO
               prevIsVowel prevPrevIsVowel
               lastIsMerged)
    (if (equal? word '())
        (if prevIsVowel
            (if prevPrevIsVowel
                (if lastIsMerged
                    -1
                    -2)
                -1)
            0)
        (if (equal? (car word) 'a)
            (if prevIsE
                (cs (cdr word) #f #f #t prevIsVowel #t)
                (if prevIsO
                    (cs (cdr word) #f #f #t prevIsVowel #t)
                    (+ 1 (cs (cdr word) #f #f #t prevIsVowel #f))))
            (if (equal? (car word) 'e)
                (if prevIsE
                    (cs (cdr word) #f #f #t prevIsVowel #t)
                    (+ 1 (cs (cdr word) #t #f #t prevIsVowel #f)))
                (if (equal? (car word) 'i)
                    (+ 1 (cs (cdr word) #f #f #t prevIsVowel #f))
                    (if (equal? (car word) 'o)
                        (+ 1 (cs (cdr word) #f #t #t prevIsVowel #f))
                        (if (equal? (car word) 'u)
                            (+ 1 (cs (cdr word) #f #f #t prevIsVowel #f))
                            (cs (cdr word) #f #f #f prevIsVowel #f)))))))))


; Signiture: count-syllables (word)
; Purpose: To compute the number of syllables in a word,
; such that each vowel is concerned as a syllables, and:
; (1) One vowel in the end of a word isn't counted
; as a syllable.
; (2) 2 vowels in the end of a word isn't counted
; as a syllable
; (3) 'e' following 'e' is counted as one syllable.
; (4) 'a' following 'e' is counted as one syllable.
; (5) 'a' following 'o' is counted as one syllable.
; Type: (list) => number
; Pre-condition: word is a list of letters.


(define count-syllables
  (lambda(word)
    (cs word #f #f #f #f #f)))

; ---------------------------------------


; Question 3.b
; signiture: (sorted? L comp)
; Purpose: Checking and returning true if and only if the the input
; list of numbers is sorted according to the comperator arrgument.
; Type: (list, (number,number)=>boolean))=>boolean

; If the procedure will get an empty list as
; input, the procedure will return #true. That's
; because in the empty list, in a vacuous truth,
; each 2 following elements x, y in this list such
; that y follows x, the value comp(x,y) is #true.
; In the same way, if the procedure will get in
; the input a list 'L' witch contains one number as
; an element, there exsists: In a vacuous truth,
; for each 2 following elements x, y s.t. y
; follows x, the value of comp(x,y) is #true.
(define sorted?
  (lambda (L comp)
    (if (equal? L '())
        #t
        (if (equal? (cdr L) '())
            #t
            (if (comp (car L) (cadr L))
                (sorted? (cdr L) comp)
                #f)))))

; --------------------------

; Question 3.c

; signiture: (helper l1, l2)
; purpose: takes two lists of numbers as input and
; returns a list containing all of the numbers, in
; increasing order.
; Type: (list, list) => list
; Pre-conditions: Each list must be a sorted list
; of numbers in increasing order.


(define helper
  (lambda (l1 l2)
    (if (and (equal? l1 '()) (equal? l2 '()))
        '()
        (if (equal? l1 '())
            (cons (car l2) (helper l1 (cdr l2)))
            (if (equal? l2 '())
                (cons (car l1) (helper (cdr l1) l2))
                (if (<= (car l1) (car l2))
                    (cons (car l1) (helper (cdr l1) l2))
                    (cons (car l2) (helper l1 (cdr l2)))))))))




; signiture: (merge l1, l2)
; purpose: takes two lists of numbers as input and
; returns a list containing all of the numbers, in
; increasing order.
; Type: (list, list) => list
; Pre-conditions: Each list must be a sorted list
; of numbers in increasing order.

; Example 1: (merge '(1 3 8) '(2 5 6))
; Example 2: (merge '(-12 33 68) '(62 590 600))
; Example 3: (merge '(-321 -3 38) '(32 45 66))



(define merge
  (lambda (l1 l2)
    (if (not (and (sorted? l1 <=) (sorted? l2 <=)))
    (error 'failed)
    (helper l1 l2))))

; --------------------------------------

; Question 3.d

; signiture: (remove-adjacent-duplicates l)
; purpose: takes a list as input and returns
; as value the same list with any sequence
; of repeated elements reduced to a single element
; type: (list) => list

(define remove-adjacent-duplicates
  (lambda (l)
    (if (equal? l '())
        '()
        (if (equal? (cdr l) '())
            (cons (car l) '())
            (if (equal? (car l) (cadr l))
                (remove-adjacent-duplicates (cdr l))
                (cons (car l) (remove-adjacent-duplicates (cdr l))))))))