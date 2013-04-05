# Forked from https://github.com/visionmedia/git-extras/
PREFIX ?= /usr/local
MANPREFIX ?= "$(PREFIX)/share/man/man1"
BINS = $(wildcard bin/*)
# MANS = $(wildcard man/git-*.md)
# MAN_HTML = $(MANS:.md=.html)
# MAN_PAGES = $(MANS:.md=.1)

install:
	# @mkdir -p $(DESTDIR)$(MANPREFIX)
	@mkdir -p $(DESTDIR)$(PREFIX)/bin
	@echo "... installing bins to $(DESTDIR)$(PREFIX)/bin"
	# @echo "... installing man pages to $(DESTDIR)$(MANPREFIX)"
	@$(foreach BIN, $(BINS), \
		echo "... installing `basename $(BIN)`"; \
		cp -f $(BIN) $(DESTDIR)$(PREFIX)/$(BIN); \
	)
	# cp -f man/git-*.1 $(DESTDIR)$(MANPREFIX)

docs: $(MAN_HTML) $(MAN_PAGES)

man/%.html: man/%.md
	ronn \
		--manual "Controlpad" \
		--html \
		--pipe \
		$< > $@

man/%.1: man/%.md
	ronn -r \
		--manual "Controlpad" \
		--pipe \
		$< > $@

uninstall:
	@$(foreach BIN, $(BINS), \
		echo "... uninstalling $(DESTDIR)$(PREFIX)/$(BIN)"; \
		rm -f $(DESTDIR)$(PREFIX)/$(BIN); \
	)
	# @$(foreach MAN, $(MAN_PAGES), \
	# 	echo "... uninstalling $(DESTDIR)$(MANPREFIX)/$(MAN)"; \
	# 	rm -f $(DESTDIR)$(MANPREFIX)/$(MAN); \
	# )

clean: docclean

docclean:
	rm -f man/*.1
	rm -f man/*.html

dev:
	nodemon -x "sudo make install"

.PHONY: docs clean docclean install uninstall dev