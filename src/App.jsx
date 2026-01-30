import React from 'react';

const App = () => {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#F0F3F7',
      fontFamily: "'Barlow', -apple-system, BlinkMacSystemFont, sans-serif",
    }}>
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700;800&display=swap');`}
      </style>
      
      {/* Hero Section */}
      <div style={{
        background: '#466FF6',
        padding: '48px 40px 56px',
        color: 'white',
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <img 
            src="https://storage.googleapis.com/boon-public-assets/Wordmark_White.png" 
            alt="Boon" 
            style={{ height: '28px', marginBottom: '32px' }}
          />
          
          <div style={{
            fontSize: '12px',
            fontWeight: '600',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            opacity: 0.7,
            marginBottom: '12px',
          }}>
            Prepared for TriNet
          </div>
          
          <h1 style={{
            fontSize: '48px',
            fontWeight: '700',
            margin: '0 0 16px 0',
            lineHeight: '1.1',
          }}>
            Coaching Overview
          </h1>
          
          <p style={{
            fontSize: '18px',
            fontWeight: '400',
            opacity: 0.9,
            maxWidth: '600px',
            lineHeight: '1.5',
            margin: 0,
          }}>
            A coaching platform that ties to your competencies, integrates with your programs, and gives managers visibility into progress.
          </p>
        </div>
      </div>

      {/* What It Is Section */}
      <div style={{ 
        maxWidth: '900px', 
        margin: '0 auto',
        padding: '56px 40px',
      }}>
        <div style={{
          fontSize: '12px',
          fontWeight: '600',
          color: '#466FF6',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          marginBottom: '12px',
        }}>
          What It Is
        </div>
        
        <h2 style={{
          fontSize: '28px',
          fontWeight: '700',
          color: '#2E353D',
          margin: '0 0 16px 0',
        }}>
          Four products, one ecosystem
        </h2>
        
        <p style={{
          fontSize: '16px',
          color: '#2E353D',
          lineHeight: '1.6',
          opacity: 0.8,
          maxWidth: '700px',
          marginBottom: '40px',
        }}>
          Boon covers 1:1 coaching, cohort-based development, executive coaching, and team workshops. 
          They share the same coaches, the same competency framework, and the same reporting—so nothing gets siloed.
        </p>

        {/* Product Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '24px',
        }}>
          {/* SCALE */}
          <div style={{
            background: 'white',
            borderRadius: '12px',
            padding: '28px',
            borderLeft: '4px solid #466FF6',
          }}>
            <div style={{
              fontSize: '11px',
              fontWeight: '700',
              color: '#466FF6',
              letterSpacing: '0.1em',
              marginBottom: '8px',
            }}>
              SCALE
            </div>
            <h3 style={{
              fontSize: '20px',
              fontWeight: '600',
              color: '#2E353D',
              margin: '0 0 12px 0',
            }}>
              1:1 coaching for the full organization
            </h3>
            <p style={{
              fontSize: '14px',
              color: '#2E353D',
              lineHeight: '1.6',
              opacity: 0.7,
              margin: '0 0 16px 0',
            }}>
              On-demand coaching available to any employee. Sessions are booked when someone needs support—career decisions, 
              difficult conversations, stress, transitions.
            </p>
            <div style={{
              fontSize: '13px',
              color: '#2E353D',
              opacity: 0.5,
            }}>
              30-min sessions · $80/session
            </div>
          </div>

          {/* GROW */}
          <div style={{
            background: 'white',
            borderRadius: '12px',
            padding: '28px',
            borderLeft: '4px solid #6CD893',
          }}>
            <div style={{
              fontSize: '11px',
              fontWeight: '700',
              color: '#6CD893',
              letterSpacing: '0.1em',
              marginBottom: '8px',
            }}>
              GROW
            </div>
            <h3 style={{
              fontSize: '20px',
              fontWeight: '600',
              color: '#2E353D',
              margin: '0 0 12px 0',
            }}>
              Cohort-based leadership development
            </h3>
            <p style={{
              fontSize: '14px',
              color: '#2E353D',
              lineHeight: '1.6',
              opacity: 0.7,
              margin: '0 0 16px 0',
            }}>
              For high-potential leaders or new managers. Each participant works 1:1 with a matched coach over 4-6 months, 
              with progress tied to your leadership competencies.
            </p>
            <div style={{
              fontSize: '13px',
              color: '#2E353D',
              opacity: 0.5,
            }}>
              45-min sessions · $175/session · 8-12 sessions
            </div>
          </div>

          {/* EXEC */}
          <div style={{
            background: 'white',
            borderRadius: '12px',
            padding: '28px',
            borderLeft: '4px solid #2E353D',
          }}>
            <div style={{
              fontSize: '11px',
              fontWeight: '700',
              color: '#2E353D',
              letterSpacing: '0.1em',
              marginBottom: '8px',
            }}>
              EXEC
            </div>
            <h3 style={{
              fontSize: '20px',
              fontWeight: '600',
              color: '#2E353D',
              margin: '0 0 12px 0',
            }}>
              Executive coaching
            </h3>
            <p style={{
              fontSize: '14px',
              color: '#2E353D',
              lineHeight: '1.6',
              opacity: 0.7,
              margin: '0 0 16px 0',
            }}>
              For senior leaders who need a confidential thought partner. Includes 360 feedback integration 
              and assessments. Coaches are former C-suite and SVP-level operators.
            </p>
            <div style={{
              fontSize: '13px',
              color: '#2E353D',
              opacity: 0.5,
            }}>
              60-min sessions · $5,000 for 8 sessions
            </div>
          </div>

          {/* TOGETHER */}
          <div style={{
            background: 'white',
            borderRadius: '12px',
            padding: '28px',
            borderLeft: '4px solid #C47ACC',
          }}>
            <div style={{
              fontSize: '11px',
              fontWeight: '700',
              color: '#C47ACC',
              letterSpacing: '0.1em',
              marginBottom: '8px',
            }}>
              TOGETHER
            </div>
            <h3 style={{
              fontSize: '20px',
              fontWeight: '600',
              color: '#2E353D',
              margin: '0 0 12px 0',
            }}>
              Group workshops and team coaching
            </h3>
            <p style={{
              fontSize: '14px',
              color: '#2E353D',
              lineHeight: '1.6',
              opacity: 0.7,
              margin: '0 0 16px 0',
            }}>
              For offsites, leadership programs, or when a team needs shared language. 
              Custom-designed around your goals and facilitated by topic experts.
            </p>
            <div style={{
              fontSize: '13px',
              color: '#2E353D',
              opacity: 0.5,
            }}>
              90-min workshops · Priced per session
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div style={{ 
        background: 'white',
        padding: '56px 40px',
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{
            fontSize: '12px',
            fontWeight: '600',
            color: '#466FF6',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: '12px',
          }}>
            How It Works
          </div>
          
          <h2 style={{
            fontSize: '28px',
            fontWeight: '700',
            color: '#2E353D',
            margin: '0 0 40px 0',
          }}>
            How the program runs
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '24px',
          }}>
            {[
              { num: '1', title: 'Define competencies', desc: 'Identify your leadership priorities. Participants choose focus areas that match their growth edges.' },
              { num: '2', title: 'Enroll participants', desc: 'Add employees via the portal. They receive a short welcome survey.' },
              { num: '3', title: 'Coach matching', desc: 'Boon matches each participant with 2-3 coach options within 24 hours.' },
              { num: '4', title: 'Coaching begins', desc: 'Sessions run over 4-6 months via Zoom. Participants and coaches set the pace.' },
              { num: '5', title: 'Collect feedback', desc: 'Pre/post assessments, manager input, and engagement data throughout.' },
            ].map((step) => (
              <div key={step.num}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: '#466FF6',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '14px',
                  fontWeight: '600',
                  marginBottom: '12px',
                }}>
                  {step.num}
                </div>
                <h3 style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#2E353D',
                  margin: '0 0 8px 0',
                }}>
                  {step.title}
                </h3>
                <p style={{
                  fontSize: '13px',
                  color: '#2E353D',
                  lineHeight: '1.5',
                  opacity: 0.7,
                  margin: 0,
                }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Coaches Section */}
      <div style={{ 
        maxWidth: '900px', 
        margin: '0 auto',
        padding: '56px 40px',
      }}>
        <div style={{
          fontSize: '12px',
          fontWeight: '600',
          color: '#466FF6',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          marginBottom: '12px',
        }}>
          Our Coaches
        </div>
        
        <h2 style={{
          fontSize: '28px',
          fontWeight: '700',
          color: '#2E353D',
          margin: '0 0 16px 0',
        }}>
          Operators coaching operators
        </h2>
        
        <p style={{
          fontSize: '16px',
          color: '#2E353D',
          lineHeight: '1.6',
          opacity: 0.8,
          maxWidth: '700px',
          marginBottom: '40px',
        }}>
          Every Boon coach is ICF-credentialed and has operated at the level they're coaching. 
          Former executives, functional leaders, and builders who understand the decisions your people are actually making.
        </p>

        {/* Coach Profiles */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '32px',
        }}>
          {[
            {
              name: 'Amy Kelly Lauer',
              photo: 'https://storage.googleapis.com/boon-public-assets/amykellylauer.jpg',
              title: 'Former SVP/GM at Sephora, Old Navy, Gap',
              experience: '20+ years in retail leadership',
              quote: 'I help operators stop carrying decisions they shouldn\'t have to make alone.',
            },
            {
              name: 'Colin Cosgrove',
              photo: 'https://storage.googleapis.com/boon-public-assets/Colin%20Cosgrove.png',
              title: 'Former Head of Compliance at Google',
              experience: '11 years at Google',
              quote: 'I coach leaders navigating complexity who need a thought partner, not a playbook.',
            },
            {
              name: 'Olga Volgin',
              photo: 'https://storage.googleapis.com/boon-public-assets/Olga%20Volgin_New.png',
              title: 'Principal Eng Manager at Microsoft',
              experience: '20 years in Azure UX',
              quote: 'I coach leaders promoted for results who were never taught how to lead people.',
            },
          ].map((coach) => (
            <div key={coach.name} style={{
              background: 'white',
              borderRadius: '12px',
              padding: '24px',
            }}>
              <img 
                src={coach.photo} 
                alt={coach.name}
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  marginBottom: '16px',
                }}
              />
              <h3 style={{
                fontSize: '16px',
                fontWeight: '600',
                color: '#2E353D',
                margin: '0 0 4px 0',
              }}>
                {coach.name}
              </h3>
              <p style={{
                fontSize: '13px',
                color: '#2E353D',
                opacity: 0.7,
                margin: '0 0 4px 0',
              }}>
                {coach.title}
              </p>
              <p style={{
                fontSize: '12px',
                color: '#2E353D',
                opacity: 0.5,
                margin: '0 0 16px 0',
              }}>
                {coach.experience}
              </p>
              <p style={{
                fontSize: '14px',
                color: '#2E353D',
                fontStyle: 'italic',
                lineHeight: '1.5',
                margin: 0,
                opacity: 0.8,
              }}>
                "{coach.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* What We Measure Section */}
      <div style={{ 
        background: 'white',
        padding: '56px 40px',
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{
            fontSize: '12px',
            fontWeight: '600',
            color: '#466FF6',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: '12px',
          }}>
            What We Measure
          </div>
          
          <h2 style={{
            fontSize: '28px',
            fontWeight: '700',
            color: '#2E353D',
            margin: '0 0 32px 0',
          }}>
            What the program is designed to track
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '32px',
          }}>
            {[
              { title: 'Engagement', desc: 'Are participants showing up, staying engaged, and continuing past early sessions?' },
              { title: 'Competency movement', desc: 'Do participants show improvement in the specific leadership areas the program targets?' },
              { title: 'Manager-observed change', desc: 'Do managers notice shifts in how participants lead, communicate, and make decisions?' },
              { title: 'Downstream indicators', desc: 'Are there early signals that coaching is strengthening readiness, confidence, or retention?' },
            ].map((item) => (
              <div key={item.title}>
                <h3 style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#2E353D',
                  margin: '0 0 8px 0',
                }}>
                  {item.title}
                </h3>
                <p style={{
                  fontSize: '14px',
                  color: '#2E353D',
                  lineHeight: '1.6',
                  opacity: 0.7,
                  margin: 0,
                }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Manager Visibility Section */}
      <div style={{ 
        maxWidth: '900px', 
        margin: '0 auto',
        padding: '56px 40px',
      }}>
        <div style={{
          fontSize: '12px',
          fontWeight: '600',
          color: '#466FF6',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          marginBottom: '12px',
        }}>
          Manager Visibility
        </div>
        
        <h2 style={{
          fontSize: '28px',
          fontWeight: '700',
          color: '#2E353D',
          margin: '0 0 32px 0',
        }}>
          Connected, not invasive
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '32px',
        }}>
          <div style={{
            background: 'white',
            borderRadius: '12px',
            padding: '24px',
          }}>
            <h3 style={{
              fontSize: '14px',
              fontWeight: '600',
              color: '#2E353D',
              margin: '0 0 16px 0',
            }}>
              What managers see
            </h3>
            <ul style={{
              margin: 0,
              padding: '0 0 0 20px',
              fontSize: '14px',
              color: '#2E353D',
              opacity: 0.7,
              lineHeight: '1.8',
            }}>
              <li>Enrollment status</li>
              <li>Sessions completed</li>
              <li>Focus areas (theme-level)</li>
              <li>Pre/post survey inputs</li>
              <li>Option to request alignment call</li>
            </ul>
          </div>

          <div style={{
            background: 'white',
            borderRadius: '12px',
            padding: '24px',
          }}>
            <h3 style={{
              fontSize: '14px',
              fontWeight: '600',
              color: '#2E353D',
              margin: '0 0 16px 0',
            }}>
              What stays confidential
            </h3>
            <ul style={{
              margin: 0,
              padding: '0 0 0 20px',
              fontSize: '14px',
              color: '#2E353D',
              opacity: 0.7,
              lineHeight: '1.8',
            }}>
              <li>Session content and notes</li>
              <li>Private conversations</li>
              <li>Personal issues discussed</li>
              <li>Anything used for performance management</li>
            </ul>
          </div>
        </div>

        <p style={{
          fontSize: '14px',
          color: '#2E353D',
          opacity: 0.6,
          marginTop: '24px',
          fontStyle: 'italic',
        }}>
          This is leadership development, not performance correction. Content stays between participant and coach.
        </p>
      </div>

      {/* Footer */}
      <div style={{ 
        background: '#F0F3F7',
        padding: '32px 40px',
        borderTop: '1px solid #E2E8F0',
      }}>
        <div style={{ 
          maxWidth: '900px', 
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <img 
            src="https://storage.googleapis.com/boon-public-assets/Wordmark_Blue%20(8)%20(1).png" 
            alt="Boon" 
            style={{ height: '22px' }}
          />
          <span style={{
            fontSize: '13px',
            color: '#2E353D',
            opacity: 0.5,
          }}>
            boon-health.com · January 2026
          </span>
        </div>
      </div>
    </div>
  );
};

export default App;
