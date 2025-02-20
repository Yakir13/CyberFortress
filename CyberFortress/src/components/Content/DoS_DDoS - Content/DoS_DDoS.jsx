import './DoS_DDoS.css'

function DoS_DDoS(){
    return(
    <div className="DoS_DDoS">
        <h1 dir='rtl'> התקפות DoS & DDoS</h1>
        <h2 dir='rtl'>Denial of Service - מניעת שירות (DoS)</h2>
        <p dir='rtl'>התקפת מניעת שירות היא מתקפת סייבר שמטרתה לשבש או למנוע גישה תקינה לשירותי רשת, אתרי אינטרנט או שרתים על ידי הצפתם בכמות עצומה של בקשות או מידע ממקור יחיד. ההצפה יוצרת עומס יתר על המערכת, מה שמוביל להאטה משמעותית או לקריסת השירות, ובכך מונעת ממשתמשים לגיטימיים גישה אליו. למרות שהתקפת DoS נחשבת לפשוטה יחסית לביצוע, היא עלולה לגרום לנזקים תפעוליים וכלכליים חמורים. כדי להתגונן מפניה, נעשה שימוש בכלים כמו חומות אש, הגבלת קצב בקשות ומערכות לניטור תעבורה.</p>
        <h2 dir='rtl'>Distributed Denial of Service - מניעת שירות מבוזרת (DDoS)</h2>
        <p dir='rtl'>התקפת מניעת שירות מבוזרת היא גרסה מתקדמת וחזקה יותר של התקפת DoS, שבה התוקף משתמש ברשת של מחשבים פרוצים (בוטנטים) כדי להציף שרת, אתר או שירות ברשת בכמות עצומה של בקשות בו-זמנית. מטרת ההתקפה היא ליצור עומס חריג על המערכת, מה שמוביל להאטה משמעותית או לקריסת השירות ומונע ממשתמשים לגיטימיים גישה אליו. מכיוון שההתקפה מתבצעת ממספר מקורות במקביל, קשה יותר לזהות ולחסום אותה. התמודדות עם התקפות DDoS דורשת כלים מתקדמים כמו מערכות לניטור תעבורה, שירותי הגנה מבוססי ענן וחומות אש חכמות.</p>
        <h1>דוגמאות</h1>
        <h2>Examples for DoS Attacks</h2>
        <h3>Examples of DoS (Denial of Service) attacks can vary widely, depending on the methods used to overwhelm the target system or network. Here are several common types of DoS attacks:</h3>
        <p>1. <b>Buffer Overflow Attacks - </b> This type of attack involves sending more data to a network application than it is designed to handle. The excess data can cause the application or the entire system to crash, denying service to legitimate users.
        <br />2. <b>ICMP Flood - </b> Often referred to as a "Ping flood," this involves attackers overwhelming the victim's network by sending ping requests (ICMP Echo Request messages) at a very fast rate, without waiting for replies. This consumes both outgoing and incoming bandwidth, thereby crippling the victim’s network.
        <br />3. <b>SYN Flood - </b> In this attack, the attacker sends a succession of SYN requests to a target's system in an attempt to consume enough server resources to make the system unresponsive to legitimate traffic. This is achieved by not responding to the server's SYN-ACK response, causing the server to wait for acknowledgments for each of the connections initiated by the attacker, thus depleting server resources.
        <br />4. <b>HTTP Flood - </b> This type of DoS attack involves the attacker exploiting seemingly legitimate HTTP GET or POST requests to attack a web server or application. HTTP flood attacks do not use malformed packets, spoofing or reflection techniques, and require less bandwidth than other attacks to bring down the targeted site or server.
        <br />5. <b>Teardrop Attack - </b> This attack involves sending fragmented packets to the targeted device. A bug in the TCP/IP protocol prevents the server from reassembling such packets, causing the packets to overlap. The targeted device crashes or reboots repeatedly as it tries to handle the malformed packets.
        <br />6. <b>Smurf Attack - </b> This is a network layer attack that uses the IP broadcast addressing to send a large number of ICMP packets with the victim's spoofed IP address to various hosts. The volume of replies can overwhelm the victim's system.</p>
        <h2>Examples for DDoS Attacks</h2>
        <h3>Distributed Denial of Service (DDoS) attacks are similar to Denial of Service (DoS) attacks, but they involve multiple compromised systems attacking a single target, which magnifies the scale and impact of the attack. Here are some common types of DDoS attacks:</h3>
        <p>1. <b>UDP Flood - </b> In this attack, the attacker floods random ports on a remote host with a large number of User Datagram Protocol (UDP) packets. This causes the host to repeatedly check for the application listening at that port, and reply with an ICMP 'Destination Unreachable' packet when no application is found, thus consuming the host's resources.
        <br />3. <b>SYN Flood - </b> While also a common DoS method, in a DDoS context, multiple systems are used to send SYN requests to make a server's resources too busy to handle legitimate traffic. This overwhelms the server as it tries to handle each incomplete session.
        <br />4. <b>Ping of Death - </b> This involves sending multiple malicious pings to a computer. The packets are manipulated to be larger than the maximum size that IP protocols allow, which can crash the target system upon reassembly of the fragmented packets.
        <br />5. <b>Slowloris - </b> This attack attempts to keep many connections to the target web server open and hold them open as long as possible. It accomplishes this by opening connections to the server and sending only partial requests, periodically sending further HTTP headers, but never completing the request.
        <br />6. <b>Zero-day DDoS - </b> These attacks exploit previously unknown vulnerabilities in systems, meaning the attack occurs before the developers have had time to release a fix or patch. They can be particularly devastating because there are no known methods to mitigate the attack at the time it occurs.
        <br />7. <b>Botnet DDoS - </b> This involves a large number of internet-connected devices which have been previously infected with malware. These devices, often called "bots," are used to flood the victim with an overwhelming amount of traffic. Botnets are a common tool used in large-scale DDoS attacks due to the sheer volume of traffic they can generate.</p>
        <h1>כיצד להתגונן</h1>
        <h3>Defending against DoS (Denial of Service) and DDoS (Distributed Denial of Service) attacks involves several strategies and tools. Here’s a breakdown of effective measures you can take:</h3>
        <p>1. <b>Network Infrastructure Security:</b>edundancy: Implement redundant network resources and routing paths to ensure availability even during an attack. <br />Bandwidth Overprovisioning: Having more bandwidth than you typically need can help absorb the increased traffic during an attack. 
        <br />2. <b>Rate Limiting - </b>Traffic Shaping: Limit the rate of requests a server can accept or give priority to traffic from known sources. <br />Quality of Service (QoS): Prioritize essential data over others, which can help in maintaining the availability of the most critical services.
        <br />3. <b>Firewalls and Routers - </b>Access Control Lists (ACLs): Set up filters in firewalls and routers to block traffic from suspicious sources. <br />Stateful Inspection: Use firewalls capable of understanding and maintaining the state of active network connections.
        <br />4. <b>Intrusion Prevention Systems (IPS) - </b>These systems can detect and prevent intrusions by scanning network traffic to block attacks in real-time.
        <br />5. <b>Content Distribution Networks (CDN) - </b>CDNs can absorb malicious traffic and distribute legitimate traffic across various locations, making it harder for an attack to successfully target the primary server.
        <br />6. <b>DDoS Mitigation Services - </b>Specialized DDoS protection services can defend against large-scale attacks. These services route traffic through their networks, filtering out malicious traffic before it reaches your infrastructure.
        <br />7. <b>Plan and Prepare - </b>Incident Response Plan: Have a clear, documented plan that outlines the steps to take in the event of an attack. <br />Monitoring and Alerts: Implement real-time monitoring for traffic anomalies and have alert systems in place to quickly detect potential attacks.
        <br />8. <b>Software Updates - </b>Regularly update network devices and software to protect against vulnerabilities that attackers could exploit.
        <br />9. <b>Employee Training and Policies - </b>Educate employees about the importance of security practices, such as not exposing unnecessary services to the internet.</p>
    </div>
    )
}
export default DoS_DDoS;