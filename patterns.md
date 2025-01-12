# Following are various symbols that we used to make expressions-

Boundaries- \b, \B

Back reference- \1

A character class – w, d, s, D, S, W

Look ahead and behind- ?= , ?<=

Negation operator-!

Literal characters- \0, \n, \t

1-Bracket/Grouping expressions —

[] - In the square bracket expressions, all special characters (including the backslash \) lose their unique powers. It’s useful on multiline strings. We cannot apply the escape rule with this expression. This expression is used to match any string that is written in these brackets.
() - parenthesis are used to group and capture the data. Any multiple occurrences taken by several groups will be exposed in the form of a classical array. we will access their values specifying using an index on the result of the match.

If we choose to put a name to the groups (using (?…)) we will be able to retrieve the group values using the match the result like a dictionary where the keys will be the name of each group.

2- Quantifiers-

The quantifiers ( * +." ?{}) are greedy operators, so they extend the match as far as they can through the provided text. Anchors- ^, $

+ -> abc+ matches a string that has ab followed by one or more c.

+ Repeat the end operator 0 or more times.

? -> abc? matches a string that has ab followed by zero or one c. means at most one c is present.

A{N} -> It matches a string that contains a sequence of N A’s.

Anchors —

We can use ^ symbol in various ways. It is also known as negates or NOT operator.

^a – matches any string with an a at the beginning.

^ can be used as a negation of the expression.

[^a-zA-Z] a string that has not a word from a to z or from A to Z.

<[^]+> matches any character except one or more times included inside .

$ -> A$ – matches a string which has A at the end.

.(dot) -> a.a – matches any string containing a followed by any character in turn followed by another a. Expect any character. Use this operator carefully since often class or negated character class are faster and more precise. It also matches any character that is not a newline char (e.g. \n) unless you use the s flag. In order to be taken correctly, you must escape the characters ^.[$()|*+?{\/ with a backslash \ as they have a specific meaning.

Notice that a more suitable solution should avoid the usage of .(dot) in favour of a more strict regex:

3- OR operator — | or []

If you want to search one string or another, use the | operator.

/a(b|c)/ matches a text that has a followed by b or c. It can also be written as a[bc].

Literal characters-

\0 matches null

\n matches a newline character

\t matches a tab character

Character class-

\d -> matches only digit equivalent to [0-9]

\D -> will do the inverse match with respect to that obtained with \d. matches any single character that’s not a digit, equal to [^0-9].

\w -> matches a word record (alphanumeric character plus underscore). matches any alphanumeric character, equivalent to [A-Za-z0-9]

\W -> matches any non-alphanumeric character, equivalent to [^A-Za-z0-9]

\s -> matches a whitespace character includes tabs and line breaks, spaces and Unicode spaces.(new in ES2018) short for single line, it causes the .(dot) to match newline characters as well.

\S matches any character that’s not a whitespace

\d, \w and \s show their opposites with \D, \W and \S respectively.

4- Flags-

Flags are used to identify the values. we can also combine them with each other. Here is the list of flags with Action that we use generally:

g: (global)

does not return after the first match, restarting the subsequent searches from the end of the previous match. matches the pattern multiple times.

m: (multi-line)

when enabled ^ and $ will match the start and end of a line, instead of the whole string. enables multiline mode. Without this, with multiline strings, they match the beginning and end of each line.

u:

enables support for Unicode (introduced in ES6/ES2015).

\uXXXX matches a Unicode character with code XXXX (requires u flag)

i:

(insensitive) makes the whole expression case-insensitive (for instance /aBc/i would match AbC)

Boundaries-

\b

describes an anchor like caret (it is similar to $ and ^) matching positions where one side is a word character (like \w) and another side is not a word type. for instance, it may be the beginning of the string or a space character.

\babc\b performs “whole words only” search

\B

It is the opposite of \b This matches all positions where \b doesn’t match and could be if we want to find a search pattern fully surrounded by word characters

\Babc\B matches only if the pattern is fully enclosed by word characters.

Back-references — \1

([abc])\1 using \1 it matches the same text that was matched by the first capturing group

([abc])([de])\2\1 we can use \2 (\3, \4, etc.) to identify the same text that was matched by the second (third, fourth, etc.) capturing group.

(?[abc])\k we put the name foo to the group and we reference it later (\k). The result is the same as the first regex.

Look-ahead and Look-behind — (?=) and (?<=)

d(?=r) matches a d only if is followed by r, but r will not be part of the overall regex match.

(?<=r)d matches a d only if is preceded by an r, but r will not be part of the overall regex match.

negation operator!

d(?!r) matches a d only if is not followed by r, but r will not be part of the overall regex match.

(?=1) items

+ /^\d*$/ Match 0 or more (>= 0) items

{n} /^\d{3}$/ Match exactly n items

{n,m} /^\d{3,5}$/ Match between n and m times:

/^\d{3,}$/ m can be omitted to have an open ending, so you have at least n items:

/^(\d{3})(\w+)$/ This example matches exactly 3 digits followed by one or more alphanumeric characters.

\$\d matches a text that has a $ before one digit. you can match also non-printable characters like tabs \t, new-lines \n, carriage returns \r.

 Metacharacters Description

/ Begins and ends the regular expression

. Matches any single character except the newline

element* Matches element zero or more times

element+ Matches element one or more times

element? Matches element zero or one times

[characters] Matches a character out of those contained within the brackets

[^characters] Matches a single character that is not contained within the brackets

(regex) Treats the regex as a group for counting or a following *, +, or ?

left|right Matches either left or right

[l-r] Matches a range of characters between l and r

^ Requires match to be at the string’s start

$ Requires match to be at the string’s end

\b Matches a word boundary

\B Matches where there is not a word boundary

\d Matches a single digit

\D Matches a single nondigit

\n Matches a newline character

\s Matches a whitespace character

\S Matches a nonwhitespace character

\t Matches a tab character

\w Matches a word character (a-z, A-Z, 0-9, and _)

\W Matches a nonword character (anything but a-z, A-Z, 0-9, and _)

\x x (useful if x is a metacharacter, but you really want x)

{n} Matches exactly n times

{n,} Matches n times or more

{min,max} Matches at least min and at most max times

[^a] #any character except 'a'

[^aA] #any character except 'a' or 'A'

[^a-z] #any character except a lower case character

[^.] #any character not a period

"abc*" matches "ab" followed by zero or more occurances of "c", for example,

"ab", "abc", "abcc", etc.

"abc+" matches "ab" followed by one or more occurances of "c", for example,

"abc", "abcc", etc, but not "ab".

"abc?" matches "ab" followed by zero or one occurances of "c", for example, "ab" or "abc".

Alternate patterns (separated by a vertical bar) match either of the alternative

patterns. For example, "(aaa)|(bbb)" will match either "aaa" or "bbb".

 a set matches any character in the set or range. For example, "[abc]"

matches "a" or "b" or "c". And, for example, "[_a-­z0­-9]" matches an underscore or any lower­case letter or any digit

() - concat data

"ab(cd)*ef" is a pattern that matches "ab" followed by any number of occurances of "cd"

followed by "ef", for example, "abef", "abcdef", "abcdcdef", etc

"\d" (any digit), "\w" (any alphanumeric character), "\W" (any non­alphanumeric character)

https://regex101.com/