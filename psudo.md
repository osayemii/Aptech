START
BOTTOM	=	first	element
TOP  = last element
WHILE	((TOP>=BOTTOM)	and	(not	found))	loop
MID=	(TOP	+	BOTTOM)/2
IF	(LIST(MID)	=	item	to	find)	THEN
FOUND = true
ELSE	IF	(item	to	find	>	LIST(MID))	then
BOTTOM	=	MID+1
ELSE
TOP = MID - 1
END IF      
END loop
IF FOUND = true 
Wanted item is in database
ELSE
Wanted item is NOT in database
END IF
END