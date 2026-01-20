# Project Guidelines

<!--
SELF-PRUNING INSTRUCTIONS
When first working on this project:
1. Detect project type via package files (package.json, pubspec.yaml, Cargo.toml, go.mod, requirements.txt, etc.)
2. REMOVE sections where [PRUNE IF: condition] is TRUE
3. KEEP sections marked [KEEP]
4. Delete this block and all [PRUNE IF]/[KEEP] markers after pruning
5. Fill in [bracketed placeholders] with actual project values
-->

## Overview [KEEP]
**Type:** [e.g., React Native app, Next.js web app]
**Language:** [Primary language]

### Commands
```bash
dev:   [detect from scripts]
test:  [detect from scripts]
build: [detect from scripts]
```

---

## Code Style [KEEP]
- Follow existing codebase patterns
- [Document observed naming conventions: files, functions, components]

---

## Secrets & Environment [KEEP]

**Never commit:** `.env`, `*credentials*`, `*secret*`, API keys, tokens
**Never log:** Passwords, tokens, PII, full request/response bodies with auth headers
**Never hardcode:** Use environment variables for all external service credentials

If secrets are accidentally committed:
1. Rotate the exposed credential immediately
2. Use `git filter-repo` or BFG to purge from history
3. Force push (with team coordination)

---

## Dependencies [KEEP]

**Before adding a dependency, ask:**
1. Can this be done in <50 lines without it?
2. Is it actively maintained (commits in last 6 months)?
3. Does it have known vulnerabilities? (`npm audit` / `pip-audit` / `cargo audit`)

**Always ask user before adding:** ORMs, state management libraries, UI frameworks, anything >100KB
**Freely add:** Type definitions, small utilities (<10KB), dev tooling

---

## Testing Requirements [KEEP]

**Tests required for:**
- Business logic (calculations, transformations, validation)
- API endpoints (happy path + error cases)
- Bug fixes (regression test proving the fix)

**Tests optional for:**
- Pure UI components (covered by E2E)
- Simple CRUD with no logic
- Prototypes/spikes

**Coverage:** No arbitrary threshold. Cover logic that could break, not lines for metrics.

---

## Quality Standards [KEEP]

**Architecture decisions:** Require multi-model validation (PAL consensus) before implementation
**Code changes:** Require pre-commit validation (PAL precommit) before every commit
**PRs:** Require external code review (PAL codereview) before opening (never for drafts)
**UI implementation:** Require design fidelity check against Figma source when designs exist
**API changes:** Require OpenAPI spec update + breaking change analysis
**Complex debugging:** Require systematic investigation (PAL thinkdeep), not guesswork
**Frontend changes (mobile):** Require Maestro test coverage

---

## Verification (Always Works™) [KEEP]

"Should work" ≠ "does work". Pattern matching isn't enough. Untested code is a guess.

**Before claiming something works, answer YES to all:**
1. Did I run/build the code?
2. Did I trigger the exact feature I changed?
3. Did I observe the expected result (including GUI if applicable)?
4. Did I check for error messages?
5. Would I bet $100 this works?

**Never say:**
- "This should work now"
- "I've fixed the issue" (without verification)
- "Try it now" (without trying it yourself)
- "The logic is correct so..."

**Verify by change type:**
- UI changes → Actually interact with the element
- API changes → Make the actual call
- Data changes → Query the database
- Config changes → Restart and verify it loads

---

## Session Completion [KEEP]

Work is NOT complete until changes are pushed. Never end a session with unpushed commits.

**Before ending any session:**
1. Run quality gates (tests, linters, PAL precommit)
2. Commit with descriptive message
3. `git push` — MANDATORY, not optional
4. `git status` must show "up to date with origin"
5. File issues for remaining work
6. Provide handoff context for next session

---

## Automatic Escalation [KEEP]

Escalate to deeper analysis (PAL thinkdeep) when:
- Problem persists after 2 attempts
- Change touches >5 files
- Security-sensitive code paths involved
- Uncertainty about approach

Escalate to multi-model consensus (PAL consensus) when:
- Irreversible decisions (schema migrations, API contracts, auth flows)
- Multiple valid architectural approaches exist
- Performance vs. maintainability tradeoffs

Escalate to challenge (PAL challenge) when:
- Assumption is uncertain
- Potential flaw detected that could have serious consequences

---

## Context Management [KEEP]

The orchestration thread (main chat) should stay lean. Context rot degrades LLM performance.

**Subagents are information collectors, not implementation workers.**
Gather, analyze, summarize—return condensed insights for implementation decisions.

**Delegate to subagents:** Codebase exploration, documentation analysis, code review, any research that would bloat context

**Delegate to clink (Gemini):** Large context analysis, full codebase review, security scanning (SAST, dependency vulnerabilities)

**Use large-context models (Gemini Pro via clink):** Full codebase analysis, large documentation synthesis, holding subsystems in memory

**Use ralph-loop for:** Mechanically defined tasks with automated success criteria (tests pass, build succeeds), batch operations, large refactors
**Do NOT use ralph-loop for:** Architectural decisions, security-sensitive code, exploratory work. Always set `--max-iterations`.

**Keep in orchestration:** User communication, small implementations, coordination, judgment calls

**File system as memory:** Write findings to `./plans/` or `./docs/`, reference summaries instead of re-analyzing

**Context hygiene:** Summarize when returning to orchestration, never re-read analyzed files, compress ruthlessly

---

## Tool Preferences [KEEP]

**Browser/UI testing:** Maestro (mobile) → Playwright (web E2E) → Chrome DevTools (debugging only)
**Documentation lookup:** Context7 (libraries) → PAL apilookup (APIs) → WebSearch (general)
**Reasoning:** PAL thinkdeep (complex) → Sequential Thinking (step-by-step) → native (simple)
**GitHub operations:** `gh` CLI (standard) → GitHub MCP (complex queries)

**Code review pipeline:**
- Pre-commit: PAL precommit
- Post-implementation: feature-dev:code-reviewer
- Pre-PR: PAL codereview
- PR stage: /review-pr or pr-review-toolkit:code-reviewer

**Code quality agents:**
- Simplification: code-simplifier:code-simplifier
- Error handling: pr-review-toolkit:silent-failure-hunter
- Test coverage: pr-review-toolkit:pr-test-analyzer
- Type design: pr-review-toolkit:type-design-analyzer

**Codebase exploration:**
- Quick search: Explore agent
- Deep understanding: feature-dev:code-explorer
- Feature planning: feature-dev:code-architect
- General research: general-purpose agent

**Security scanning (via clink to Gemini):**
- Dependency audit: `scan_vulnerable_dependencies` (queries osv.dev)
- SAST analysis: `/security:analyze` (comprehensive static analysis)
- CVE research: `get_vulnerability_details` (full vulnerability info)
- PoC validation: `run_poc` (verify exploitability in controlled environment)

---

## Maestro E2E Testing [PRUNE IF: no ios/, android/, react-native, or flutter]

**Location:** `.maestro/` organized by feature
**Install:** `curl -fsSL "https://get.maestro.mobile.dev" | bash` (requires Java 17+)

```bash
maestro test .maestro/                        # all tests
maestro test --includeTags smoke .maestro/    # smoke only
maestro test --format junit .maestro/         # CI reports
```

**Flow template:**
```yaml
appId: [bundle.id]
tags: [smoke, feature-name]
---
- launchApp:
    clearState: true
- tapOn:
    id: "element_id"
- inputText: "value"
- assertVisible: "expected"
```

---

## React Native [PRUNE IF: no react-native in package.json]

**Test IDs required on all interactive elements:**
```jsx
<TouchableOpacity testID="screen_element_action" />
<TextInput testID="screen_element_input" />
```

iOS nested touchables need `accessible={false}` on parent, `accessible={true}` on child.

---

## Flutter [PRUNE IF: no pubspec.yaml with flutter]

**Use Semantics identifier (Flutter 3.19+):**
```dart
Semantics(
  identifier: 'element_id',
  child: Widget(...),
)
```

---

## iOS Native [PRUNE IF: no .xcodeproj without react-native/flutter]

```swift
button.accessibilityIdentifier = "element_id"      // UIKit
.accessibilityIdentifier("element_id")             // SwiftUI
```

Simulator only - physical devices not supported.

---

## Android Native [PRUNE IF: no build.gradle without react-native/flutter]

```xml
android:id="@+id/element_id"
android:contentDescription="element_id"
```

```kotlin
Modifier.semantics { contentDescription = "element_id" }  // Compose
```

---

## Web Frontend [PRUNE IF: no react/vue/angular/svelte or has react-native]

```jsx
<button data-testid="element-id" />
```

---

## API Documentation [PRUNE IF: no API endpoints (no express/fastify/flask/django/gin/actix/etc.)]

**File:** `openapi.yaml` at project root (create if missing)

When creating or updating any endpoint, update `openapi.yaml` to match. Include:
- Path, method, summary
- Request body schema (if applicable)
- Response schemas (success and error)
- Required authentication

---

## Python [PRUNE IF: no requirements.txt/pyproject.toml]

```bash
pytest                    # run tests
pytest --cov=src          # with coverage
black . && ruff check .   # format & lint
```

Type hints required on all function signatures.

---

## Go [PRUNE IF: no go.mod]

```bash
go test ./...             # run tests
go test -cover ./...      # with coverage
```

Always wrap errors: `fmt.Errorf("context: %w", err)`

---

## Rust [PRUNE IF: no Cargo.toml]

```bash
cargo test                # run tests
cargo fmt && cargo clippy # format & lint
```

---

## Review Checklists [KEEP]

Use these when invoking code review agents or validating changes.

### Maestro Coverage [PRUNE IF: no mobile app]
- [ ] Every new screen has a corresponding `.maestro/` flow
- [ ] All interactive elements have testID/accessibilityIdentifier
- [ ] TestID naming follows `screen_element_action` pattern
- [ ] New user flows have smoke-tagged happy path tests
- [ ] Error states and edge cases have flow coverage
- [ ] Flows use `id:` selectors, not text (for i18n stability)

### OpenAPI Sync [PRUNE IF: no API endpoints]
- [ ] New endpoints added to `openapi.yaml`
- [ ] Modified endpoints have updated schemas
- [ ] Request body schemas match implementation
- [ ] Response schemas cover success AND error cases
- [ ] Breaking changes flagged and documented
- [ ] Authentication requirements specified

### Supabase [PRUNE IF: no Supabase]
- [ ] New tables have RLS policies enabled
- [ ] RLS policies follow least-privilege principle
- [ ] No `USING (true)` policies on sensitive tables
- [ ] Migrations are reversible where possible
- [ ] Foreign keys and indexes defined appropriately
- [ ] Edge functions validate inputs at boundary

### React Native [PRUNE IF: no react-native]
- [ ] All Touchable/Pressable have `testID`
- [ ] All TextInput have `testID`
- [ ] Navigation screens registered with consistent naming
- [ ] Platform-specific code uses `.ios.tsx`/`.android.tsx` or Platform.select
- [ ] Nested touchables handle accessibility correctly
- [ ] Images have accessible labels for screen readers

### Flutter [PRUNE IF: no flutter]
- [ ] All interactive widgets have `Semantics(identifier:)`
- [ ] Icons/images have `semanticLabel`
- [ ] Widget keys used appropriately for list items
- [ ] Platform-specific code uses `Platform.isIOS`/`Platform.isAndroid`
- [ ] Responsive layouts handle different screen sizes

### iOS Native [PRUNE IF: no iOS native]
- [ ] All controls have `accessibilityIdentifier`
- [ ] VoiceOver labels are meaningful
- [ ] Follows Human Interface Guidelines
- [ ] No hardcoded strings (use Localizable.strings)
- [ ] Memory management correct (no retain cycles)

### Android Native [PRUNE IF: no Android native]
- [ ] All views have `contentDescription` or `android:id`
- [ ] TalkBack labels are meaningful
- [ ] Follows Material Design guidelines
- [ ] No hardcoded strings (use strings.xml)
- [ ] Lifecycle handled correctly (no leaks)

---

## Git [KEEP]

**Author/Committer:** The App Agency <hey@theappagency.com>

**Commits:** `type(scope): description`
Types: `feat`, `fix`, `docs`, `refactor`, `test`, `chore`

**Branches:** `feature/`, `bugfix/`, `hotfix/`

---

## Setup [KEEP]

```bash
[install command]
cp .env.example .env
[dev command]
```

---

## Pitfalls [KEEP]
- [Add project-specific gotchas as discovered]
