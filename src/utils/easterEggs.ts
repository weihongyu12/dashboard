const easterEggs = (): void => {
  // eslint-disable-next-line no-console
  console.log(`
mmds+:-------+dmmmds+/-------/hdmdhs+:-------ydmdyo+:------/hhyso+:-..---+hyyso/:-..---+oo++/+oosssy
mmmy+:-------:hmmmmyo+--------sdmmhs+:-------odmmhs+:------:yhhyo+/------/hyyso+/------/ooo++ooossyy
mmmho/--------sdmmmhs+:-------odmmdyo/-------/hddhyo/-------shhys+/------:yhyss+/------:o+oo+ooossyy
mmmds+:-------+dmmmdy+/-------+hdmdhyo+////::/hddhyo+-------+hhyso/:------shysso+:-----:+oooosossyyh
mmmmyo/-------:ydmmmyo+:::+osyhdddddddddddhddhdhhhys+/------/yhyso+:------+hyyso+:-----:+oooosssyyhh
mmNmhs/:-------odmmmhsssyhhhddddddddddmmmmmddddddddhys+/::--:syyys+/------/hhyso+/-----:+ooosssyyhhh
mmNNdso:-------/hdddhhdddhhhdddddmmmmmmmmmmmddddddddhhyyssooosyyyso+:-----:yhyss+/----::/soosssyhhhh
dmNNmyo/-------:syhhhhhhhhdddddddmmmmmmmmmmdddddddddhhhyysssyyhyyyso+//::--shyss+/:---:::ooossyyhhhh
hmmmmhs+-----:/osyyhhhhdddddddddmmmddddmmmmmddmmmmmmdddhyyssosyhhhyyssso+//ohyyso+:--:-::+osssyhhhhh
smmmmdyo:---:ossyyhhdddddddddddddddddddmmmmmddmmddmmddddhyyyyyyhhhhhyyyyysosyyyso+/----::+osssyhhhhh
+dmmmmho/::/ossyyhhhdddddddddhhhhhhddddddddddmmmmmmmmmdddhyyyyyyyhhhhhhhhdhhdhyys+/::-:::+ossyyhhhhh
:ymmmmdso+osssyhhdhhhddddddhhhhhhhhhhhdddmmmmmmmmmmmmmmmdddhdhhhyyhdddhhhhddddhhso+::-:::+sssyyhhhhh
:ommmmdyyyyyyyhdhhhhhhhhhddhddhhhhhdddddmmmmmmmmmmmmmmmmmddddddhhyyhddddhhhhhhdhyo+/::::/+sssyhhhhhy
-/ddddhhhhhhhhhhyhhyyyhhhhdhhhhhhdhdddmmmmmmmmmmmmmmmmmmmddddddhhyyydddddhhhdhhhhyo/::::/+ossyhhhhds
-:yhhhhhhhhddhhhyyyyyyyhhhhhhhhhhdddddddddddddddddddddddddhhhhhhhysyhhddhhhhdddddhys/:::/+osyyhhhhds
::oyhhhhhddhdhhyyyyyyhhhyyyyhhdddddddddddddddddmmmmmmdddddhhhhhhyysyyyhdhyhhddddddhhs+//+o+syyhhhhhs
osshhhddddhdhhhyyyyyyyyyyyyyhhdddddddddddddddmmmdmddddddddddhhhhyyssyyhhdhhhhdddddhhys+++++syhhhhhhy
dddhhdddddddhhyyyyyyyyyyyyyhdddddddddhddddddhhhhhhhhhhhhhhyhyyyyyssssyhhhhhhhdddddhhhysooo/syhhhhdhs
ddhddddddddhhyyyyyyyyyyyyhddddhhhhhhddhhhyyyyyyyssssssssssssssssssosyyhhhddddddddddhhyyyso+syhhhhdh+
dddddddddhhhhhhhhyyyhhhhhdhhyyyyhhyyssssooooooooooooooooooooo+oooooosyyhhhhdddddddhdhyyyss+syhhhhhh+
ddddddddhhhhhhhhyyhdhhhhhyyssyyysooo++++++++o++++ooo+++++///+++++++oossyhhddddddddhdyyyyyyssyhhhhhdo
hddddddhhhhhddhhhdhdhhhyysossso+++////:://///++++++//////////////++++oosyyhhdddddmddyyyyyyyyhhhhhddy
dddddhhdhhdddhhddddhhhysooooo+////::::::://////////:::::::::////////+++ossyyhhdddmddhhyyyyhyhhhhhddd
ddddhhhhdddhddddddhyso++oso+////:::::::::::::::::::::::::::::::///////+++ossyhhhddddhhhyyyhhhhhhhddd
dddhhhhhdddddddhhyys++osoo///:::::::::::::::-::::::--::::::::::::///////+++osyyhhdddhhhyyhhhhhhhhddd
ddhhddhhhhhhhhyyyyo++ooo+//::::::::--------------------:::::::::::://///+++oossyyhhhhhyyyhhhhhhhhddd
ddddddddddddhyysy+/+o+++////:::::::----------------------:::::::::::////+++ooossyyyhhyyyhhhhhhhhhddd
dddddddddddhysoso//o++/////::::::::---------------------:::::::::::////+++++oosssyyyhyyyhhhhhhhhhddh
dddddddddddyso+s//so/////:::::::::---------------------::::::::::://///++++ooosssyyyyyyyhhhhhhhhhddy
hdddddddmdhso+oo/oo///::::::::::::---------------------:::::::::///////++++ooosssyyyyyyyhhhhhhhhhddo
hdddddddmdyo++y+oo+//::::::::::::------------------::::::::::::///////+++++oossssyyyyyyyhhhhhhhhhdh+
hddddmmmmdyo++s+o+/::::::::::::::------------::::::::::::::::::///////++++ooossssssyysyyhhhhhhhhhhy/
hdddmmmmmdy+/oooo/:::::::::::::::::--------:::::::::::::::::::////////+++oooosssssssssyyhhhhhhhhhhs/
hdddmmmmmds++s+o/:::::::::::::::::--------::::::::::::::::::::///////++++ooossssssssssyyyhhhhhhhhhs/
yhdmmmmmdhs++s++::::::::::::::::--------::::::::::::::::::::::///////++++oooosssssssssyyyhhhhhhhhho:
syhmmmmmdyo/oo+::::::::::::::::--------:-::::::::::::::::::::://////++++oooooossssssssyyyhhhhhhhhhs:
/:/ymmmmdy++o+/:::/++ooo+++////:::::::::::::::::::::::::::::://////++++++oooossssssssssyyyhhhhhhhhs/
+//ymmmmds+o+//+oosssssssooooooo++//::::::::::::::::::::://///////++++oossyyyhhhhhyssssyyyhhhhhyhhy/
o++hmmmmhoo+//+++//////+++ooossyyyssoo++/////::::::::::////////+++oosyyhddddddddddddyssyyyhhhyyyhhh+
+ooyddmdy+//::::::::::::::////+++oosssssoo+////::::::://////++oosyyhhhhhhhhhyyyyyyhhhyssyyhhhysyhhys
o+ooyyhhs/::::::::////+ossyyyyyso+++++oooo++////::::://////++oosssssssooooooooooosssssossyyhhysyhysh
ho++++ss+:::::////++oshhyymmmddmmdyoo++++++/////:::://///++++oooooo+oosyyyyyyyssssssssossyhhhhyhhhyh
mdo///+o/:::::///+osyhyo+smmdddmmmhsooo++++///////:::///+++oooo+ooshdddmNNmdhddhhyyyssossshhhhyyhhyh
mmdo::/+/:::::///+ossoo+/+hdmmdddds++ooo+++/////:::::///++ooo+oosyhmmdmmNmmhsyhdddhyyssssyyhhhyyhhhh
mdho:::+/:::::::://////////oyyhys+/++++oo+/////:::::::/++oooo+oyyo+ydmddmdhssyyhhhhhyysssyyhhhysyhhh
hs++/:://:::::::::::::::://////////////+//:::::::---::/+ooooo+sssoooosyyysossyyyyyyyssssssyyhhhssyhh
o+/::::/::::::::::-:::::::::::::::///:::::::::::-----:/+ooo++++++++++++oooooossssssssssossyyydhhsohd
so/:---:::::::::-------------::::::::----------------:/+++++++/////+++++++++oooooooossooosyyoyhhyosd
ys+///:::::::::::------------------------------------://+++++/////////////++++ooooooosooooys+ohdhyoh
yso+++++::::::::::::---------------------------------::/+++++//////////////+++oooosssssoooys+/ohdhyy
ysoooooo+//:::::::::::------------------::-----------::/+++++++///////////+++++ooosssssoooys+//shddy
ysoossssyo/::::::::::::--------------:::::::::-------::/+++++++//////////////+++oossssso+oy+///+ohdd
ssssssyyyyo/::::::::::::------------:::::/::::::-----::/+ooooo++////::://////+++oossssoo/os/::++/+sh
ssssyyhmmhy+/:::::::::::::-------::::::///:::::::----::/+oooos++///::::://///+++oosssso+/ss::::/+++o
ssyhddmddhso//:::::::::::::::::::::::////:::::::::---::/++++++o+//:::::://///+++oosssso++++///:://++
yyhddho+///++/:::::::::::::::::::::::///::::::::::--:::/+++//+++///:::://///++++oossssso+//+++//////
o//:------::/++::::::::::::::::::::::::::::::::/:::::://+++//++++///:///////+++oosssyyo+////+++//++o
.-----------:::////::::::::::::::::::::::///+oss++////+osssoooo+///////////++++oossys+//://++o+++++y
.-----------:::://////////////::::::::::::/+oo++/++++++oosooo+++///////////+++oosyyo++:::://++o+++oh
----.....------::/+++///////////:::::::::::://////+////++++++++//////////++++ooooooso/:::::/+ooo++oh
-----....--------::/+o++/////////////:::::::::::://////////////////+++++++++o+//:/++o+:::::/++oooosm
-------...--:::--.---://+++///////++++///::::///////////++++/+++++++++++++++/::-:://+++/:::/++oooohN
--------.----::-.....--:://++////+oooosssssssooooooooossssssssssso+++++ooo+//:-----://+/:::/++ooosmN
-------------:---.....-:////+++//+++++++osssoossyyyyyyyyyyyhhhyso+++++oso+++o/:--.--://+/:://+oooyNN
------------::--.....--:+oo+oo+++////////+ooo++++ooooooossyyyso++++++oyho+++os/:----::/++/://+ooohNN
-----------::---.....-:/osoooss++++////////++oooooooooossssoo++++++osyhdh+++o+/::----://+/:/++ooohNN
---:-------::---....--:/yysssyyso+++//////////++ooooooooo++++++++osyyhhhyo++/:-------:://+//++ooohNN
:--:-------:----....--:+shhhhhhyso+///////////////////++++++++++ooo+////:::::--------:://+++++ooodNN
:--:-------:-----...--://syhhhhdhyo+///::::::::::::://///+++++++//:::::--------------::::/+o++oosmNN
------------------..---::::/++++++++///::::::::::::://///++/++/:::-------------------::::/++++shmNNN
-----------------------------:-----::::::/::://///////////++/:::--------------------:::::/oshdNNNNNN
----------------------------------------::////////////++++/:::-------------------::::/+sydmNNNNNNNNN
----------:-------------------------------:://++++osso+//:::-----------------::::/+sydmNNNNNNNNNNNNN
s/:::----:::------------------------------::::///+oyy+/:::::-----------:::::://oyhmNNNNNNNNNNNNNNNNN
Nmdhso//:::::::::::::-------------------::::::::://os+/::::--------:::::://++ydmNNNNNNNNNNNNNNNNNNNN
NNNNNNmdhsso++//////::::::::::---------:::::::::://+oo/:::--------:::://++osdNNNNNNNNNNNNNNNNNNNNNmm
NNNNNNNNNNNNmdhyoo++////:::::::::::::::::::::::::///+o/:::------:::://++oohmNNNNNNNNNNNNNNNNNNNNNmmm
NNNNNNNNNNNNNNNNNmdhyo++//////::::::::::::::::::::://+/::--------:::/++osdNNNNNNNNNNNNNNNNNNNNNNNmmm
NNNNNNNNNNNNNNNNNNNNNNmdyo+///////:::::::::::::::::////::--------::://+oyNNNNNNNNNNNNNNNNNNNNNNNmmmm
NNNNNNNNNNNNNNNNNNNNNNNNNNdy+//////::::::-----::::::://:---------:::://+shNNNNNNNNNNNNNNNNNNNNNmmmNm
NNNNNNNNNNNNNNNNNNNNNNNNNNNNmds////::::::-------:::::/+/----------::::/+oohNNNNNNNNNNNNNNNNNNNNNNNNm
NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNh+///:::::---------:::/o+:----------::://+ooyNNNNNNNNNNNNNNNNNNNNNmmm
NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNd+/::::::---------:::/os:----------::://++++yNNNNNNNNNNNNNNNNNNNNNNm
NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNs//::::-----------:::+y/:---------::://+++++yNNNNNNNNNNNNNNNNNNNNmm
NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNh//::-------------:::/ys:----------::://+++++hNNNNNNNNNNNNNNNNNNNmm
NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNd///:-------------:::/+d/:---------:::://+++++hNNNNNNNNNNNNNNNNNNmm
  `);
};

export default easterEggs;